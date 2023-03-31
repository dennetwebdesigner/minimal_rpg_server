-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Characters` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Characters_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attributes` (
    `id` VARCHAR(191) NOT NULL,
    `exp` DOUBLE NOT NULL,
    `attack_min` DOUBLE NOT NULL,
    `attack_max` DOUBLE NOT NULL,
    `defense_rate` DOUBLE NOT NULL,
    `life_current` DOUBLE NOT NULL,
    `life_max` DOUBLE NOT NULL,
    `character_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Characters` ADD CONSTRAINT `Characters_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attributes` ADD CONSTRAINT `Attributes_character_id_fkey` FOREIGN KEY (`character_id`) REFERENCES `Characters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
