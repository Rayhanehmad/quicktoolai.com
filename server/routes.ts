import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebsiteCheckSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Sitemap.xml endpoint for SEO
  app.get("/sitemap.xml", (req, res) => {
    // Use VITE_CANONICAL_URL if set (production domain), otherwise fallback to request host
    const baseUrl = process.env.VITE_CANONICAL_URL || 
      (process.env.REPL_SLUG 
        ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
        : req.protocol + '://' + req.get('host'));
    
    const tools = [
      '/percentage', '/loan', '/mortgage', '/interest', '/discount', '/tip', '/profit',
      '/currency', '/unit',
      '/bmi-calc', '/bmr', '/bodyfat', '/calorie', '/pregnancy',
      '/scientific', '/fraction', '/ratio', '/average', '/random',
      '/area', '/volume', '/speed', '/energy',
      '/clock', '/age-calc', '/date', '/time-calc', '/countdown', '/sleep',
      '/status', '/ip-lookup', '/qr-generator', '/notepad',
      '/gpa', '/love'
    ];
    
    const infoPages = [
      '/about', '/privacy-policy', '/terms-of-service', '/contact', '/support'
    ];
    
    const currentDate = new Date().toISOString().split('T')[0];
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Homepage - highest priority
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>1.0</priority>\n';
    xml += '  </url>\n';
    
    // All tool pages - high priority
    tools.forEach(tool => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${tool}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += '  </url>\n';
    });
    
    // Info pages - medium priority
    infoPages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${page}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += '    <changefreq>yearly</changefreq>\n';
      xml += '    <priority>0.5</priority>\n';
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

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

  // AI Chat endpoint
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ message: "Message is required" });
      }

      // Check if API key is configured
      if (!process.env.OPENAI_API_KEY) {
        return res.status(503).json({ 
          message: "AI service is not configured. Please add your OpenAI API key." 
        });
      }

      const { chatWithAI } = await import("./ai");
      const response = await chatWithAI(message, history || []);
      
      res.json({ response });
    } catch (error) {
      console.error('AI Chat error:', error);
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to process AI request" 
      });
    }
  });

  // AI Text Analysis endpoint
  app.post("/api/ai/analyze", async (req, res) => {
    try {
      const { text, analysisType } = req.body;

      if (!text || typeof text !== 'string') {
        return res.status(400).json({ message: "Text is required" });
      }

      if (!['summary', 'sentiment', 'keywords'].includes(analysisType)) {
        return res.status(400).json({ message: "Invalid analysis type" });
      }

      if (!process.env.OPENAI_API_KEY) {
        return res.status(503).json({ 
          message: "AI service is not configured. Please add your OpenAI API key." 
        });
      }

      const { analyzeText } = await import("./ai");
      const result = await analyzeText(text, analysisType);
      
      res.json(result);
    } catch (error) {
      console.error('AI Analysis error:', error);
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to analyze text" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
