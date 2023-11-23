/*
  Warnings:

  - You are about to drop the column `gameId` on the `History` table. All the data in the column will be lost.
  - Added the required column `game_id` to the `History` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `History` DROP FOREIGN KEY `History_gameId_fkey`;

-- AlterTable
ALTER TABLE `Game` ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `History` DROP COLUMN `gameId`,
    ADD COLUMN `game_id` INTEGER NOT NULL,
    MODIFY `board` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
