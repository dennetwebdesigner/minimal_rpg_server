-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attributes" (
    "id" TEXT NOT NULL,
    "exp" DOUBLE PRECISION NOT NULL,
    "attack_min" DOUBLE PRECISION NOT NULL,
    "attack_max" DOUBLE PRECISION NOT NULL,
    "defense_rate" DOUBLE PRECISION NOT NULL,
    "life_current" DOUBLE PRECISION NOT NULL,
    "life_max" DOUBLE PRECISION NOT NULL,
    "character_id" TEXT NOT NULL,

    CONSTRAINT "Attributes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Characters_name_key" ON "Characters"("name");

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "Characters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attributes" ADD CONSTRAINT "Attributes_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
