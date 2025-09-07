import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const websiteChecks = pgTable("website_checks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  url: text("url").notNull(),
  isOnline: boolean("is_online").notNull(),
  responseTime: integer("response_time"),
  statusCode: integer("status_code"),
  checkedAt: timestamp("checked_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWebsiteCheckSchema = createInsertSchema(websiteChecks).pick({
  url: true,
  isOnline: true,
  responseTime: true,
  statusCode: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertWebsiteCheck = z.infer<typeof insertWebsiteCheckSchema>;
export type WebsiteCheck = typeof websiteChecks.$inferSelect;
