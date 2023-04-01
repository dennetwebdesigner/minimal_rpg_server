-- CreateTable
CREATE TABLE "rules" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RulesOnUser" (
    "rule_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "RulesOnUser_pkey" PRIMARY KEY ("rule_id","user_id")
);

-- CreateTable
CREATE TABLE "maps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,

    CONSTRAINT "maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monsters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "reward" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "map_id" TEXT NOT NULL,

    CONSTRAINT "Monsters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monster_Attributes" (
    "id" TEXT NOT NULL,
    "attack_min" DOUBLE PRECISION NOT NULL,
    "attack_max" DOUBLE PRECISION NOT NULL,
    "defense_rate" DOUBLE PRECISION NOT NULL,
    "life_current" DOUBLE PRECISION NOT NULL,
    "life_max" DOUBLE PRECISION NOT NULL,
    "Monster_id" TEXT NOT NULL,

    CONSTRAINT "Monster_Attributes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "maps_name_key" ON "maps"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Monsters_name_key" ON "Monsters"("name");

-- AddForeignKey
ALTER TABLE "RulesOnUser" ADD CONSTRAINT "RulesOnUser_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RulesOnUser" ADD CONSTRAINT "RulesOnUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monsters" ADD CONSTRAINT "Monsters_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "maps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monster_Attributes" ADD CONSTRAINT "Monster_Attributes_Monster_id_fkey" FOREIGN KEY ("Monster_id") REFERENCES "Monsters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
