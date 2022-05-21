/*
  Warnings:

  - The `permissions` column on the `Permission` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `refreshToken` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountPemission" AS ENUM ('READ', 'CREATE', 'UPDATE', 'DELETE');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "refreshToken" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "permissions",
ADD COLUMN     "permissions" "AccountPemission"[];

-- DropEnum
DROP TYPE "AccountPemissions";
