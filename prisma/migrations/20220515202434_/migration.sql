/*
  Warnings:

  - You are about to drop the column `displayName` on the `Player` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Player_displayName_key";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "displayName";
