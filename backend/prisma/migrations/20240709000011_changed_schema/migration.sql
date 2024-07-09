/*
  Warnings:

  - Added the required column `month` to the `product_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_transactions" ADD COLUMN     "month" INTEGER NOT NULL;
