/*
  Warnings:

  - You are about to alter the column `price` on the `items` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(6,2)`.

*/
-- AlterTable
ALTER TABLE "items" ALTER COLUMN "price" SET DATA TYPE DECIMAL(6,2);
