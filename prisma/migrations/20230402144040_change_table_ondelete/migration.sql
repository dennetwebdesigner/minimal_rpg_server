-- DropForeignKey
ALTER TABLE "RulesOnUser" DROP CONSTRAINT "RulesOnUser_rule_id_fkey";

-- DropForeignKey
ALTER TABLE "RulesOnUser" DROP CONSTRAINT "RulesOnUser_user_id_fkey";

-- AddForeignKey
ALTER TABLE "RulesOnUser" ADD CONSTRAINT "RulesOnUser_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "rules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RulesOnUser" ADD CONSTRAINT "RulesOnUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
