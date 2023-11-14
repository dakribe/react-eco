/*
  Warnings:

  - Added the required column `readMeUrl` to the `Library` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_slug_key";

-- DropIndex
DROP INDEX "Library_slug_key";

-- AlterTable
ALTER TABLE "Library" ADD COLUMN     "readMeUrl" TEXT NOT NULL;
