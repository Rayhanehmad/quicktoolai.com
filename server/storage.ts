import { type User, type InsertUser, type WebsiteCheck, type InsertWebsiteCheck } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createWebsiteCheck(check: InsertWebsiteCheck): Promise<WebsiteCheck>;
  getRecentWebsiteChecks(limit?: number): Promise<WebsiteCheck[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private websiteChecks: Map<string, WebsiteCheck>;

  constructor() {
    this.users = new Map();
    this.websiteChecks = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWebsiteCheck(insertCheck: InsertWebsiteCheck): Promise<WebsiteCheck> {
    const id = randomUUID();
    const check: WebsiteCheck = { 
      ...insertCheck,
      responseTime: insertCheck.responseTime ?? null,
      statusCode: insertCheck.statusCode ?? null,
      id,
      checkedAt: new Date()
    };
    this.websiteChecks.set(id, check);
    return check;
  }

  async getRecentWebsiteChecks(limit: number = 10): Promise<WebsiteCheck[]> {
    const checks = Array.from(this.websiteChecks.values());
    return checks
      .sort((a, b) => b.checkedAt.getTime() - a.checkedAt.getTime())
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
