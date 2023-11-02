/*
  Warnings:

  - Added the required column `repoUrl` to the `Library` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Library" ADD COLUMN     "repoUrl" TEXT NOT NULL,
ADD COLUMN     "websiteUrl" TEXT;
