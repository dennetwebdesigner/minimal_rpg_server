-- DropForeignKey
ALTER TABLE `attributes` DROP FOREIGN KEY `Attributes_character_id_fkey`;

-- DropForeignKey
ALTER TABLE `characters` DROP FOREIGN KEY `Characters_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `Characters` ADD CONSTRAINT `Characters_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attributes` ADD CONSTRAINT `Attributes_character_id_fkey` FOREIGN KEY (`character_id`) REFERENCES `Characters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
