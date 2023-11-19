/*
  Warnings:

  - You are about to drop the column `readMeUrl` on the `Library` table. All the data in the column will be lost.
  - You are about to drop the column `repoUrl` on the `Library` table. All the data in the column will be lost.
  - Added the required column `owner` to the `Library` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repo` to the `Library` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Library" DROP COLUMN "readMeUrl",
DROP COLUMN "repoUrl",
ADD COLUMN     "owner" TEXT NOT NULL,
ADD COLUMN     "repo" TEXT NOT NULL;
