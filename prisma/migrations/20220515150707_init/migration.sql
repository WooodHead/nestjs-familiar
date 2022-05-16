/*
  Warnings:

  - You are about to drop the column `fistName` on the `Player` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "fistName",
ADD COLUMN     "firstName" VARCHAR(255) NOT NULL;
