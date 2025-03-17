/*
  Warnings:

  - You are about to drop the column `datePublished` on the `Book` table. All the data in the column will be lost.
  - Added the required column `note` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "datePublished",
ADD COLUMN     "note" TEXT NOT NULL;
