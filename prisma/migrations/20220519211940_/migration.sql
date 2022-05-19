/*
  Warnings:

  - The primary key for the `PlayerLeague` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Result` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `PlayerLeague` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Result` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "PlayerLeague" DROP CONSTRAINT "PlayerLeague_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "PlayerLeague_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Result" DROP CONSTRAINT "Result_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Result_pkey" PRIMARY KEY ("id");
