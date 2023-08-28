import { pgTable, serial, varchar, integer, text } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description").notNull(),
});

export const libraries = pgTable("libraries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  repoURL: text("repo_url"),
  categoryId: integer("category_id").references(() => categories.id),
});
