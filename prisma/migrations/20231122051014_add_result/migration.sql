/*
  Warnings:

  - Added the required column `result` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Game` ADD COLUMN `result` VARCHAR(191) NOT NULL;
