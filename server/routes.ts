import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebsiteCheckSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Website status checker endpoint
  app.post("/api/check-website", async (req, res) => {
    try {
      const { url } = req.body;
      
      if (!url || typeof url !== 'string') {
        return res.status(400).json({ message: "URL is required" });
      }

      // Validate and normalize URL
      let normalizedUrl = url.trim();
      if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
        normalizedUrl = 'https://' + normalizedUrl;
      }

      let urlObj: URL;
      try {
        urlObj = new URL(normalizedUrl);
      } catch {
        return res.status(400).json({ message: "Invalid URL format" });
      }

      const startTime = Date.now();
      let isOnline = false;
      let statusCode = 0;
      let responseTime = 0;

      try {
        // Use fetch to check website status
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        const response = await fetch(urlObj.toString(), {
          method: 'HEAD',
          signal: controller.signal,
          headers: {
            'User-Agent': 'Time-Tools-Hub/1.0'
          }
        });

        clearTimeout(timeoutId);
        responseTime = Date.now() - startTime;
        statusCode = response.status;
        isOnline = response.ok || response.status < 400;

      } catch (error) {
        responseTime = Date.now() - startTime;
        isOnline = false;
        statusCode = 0;
      }

      // Store the check result
      const checkData = {
        url: urlObj.toString(),
        isOnline,
        responseTime,
        statusCode,
      };

      const validatedData = insertWebsiteCheckSchema.parse(checkData);
      const savedCheck = await storage.createWebsiteCheck(validatedData);

      res.json({
        ...savedCheck,
        checkedAt: savedCheck.checkedAt.toISOString(),
      });

    } catch (error) {
      console.error('Website check error:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get recent website checks
  app.get("/api/recent-checks", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 5;
      const checks = await storage.getRecentWebsiteChecks(limit);
      
      res.json(checks.map(check => ({
        ...check,
        checkedAt: check.checkedAt.toISOString(),
      })));
    } catch (error) {
      console.error('Get recent checks error:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
