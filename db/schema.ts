import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const studyProgress = sqliteTable("study_progress", {
  userId: text("user_id").primaryKey(),
  revision: integer("revision").notNull().default(0),
  data: text("data").notNull(),
  updatedAt: integer("updated_at").notNull(),
});
