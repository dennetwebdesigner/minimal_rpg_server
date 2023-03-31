"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Characterrepository = void 0;
const database_1 = require("../../database");
class Characterrepository {
    remove(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.database.characters.delete({ where: { id: data.id } });
        });
    }
    findByUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.database.characters.findMany({
                where: { user_id: data.user_id },
                include: { Attributes: true },
            });
        });
    }
    findByName(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.database.characters.findUnique({ where: { name: data.name } });
        });
    }
    store(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield database_1.database.$transaction((prisma) => __awaiter(this, void 0, void 0, function* () {
                let character = yield prisma.characters.create({
                    data: {
                        name: data.name,
                        level: 1,
                        user_id: data.id,
                    },
                });
                const attributes = yield prisma.attributes.create({
                    data: {
                        character_id: character.id,
                        attack_min: 1,
                        attack_max: 3,
                        defense_rate: 2,
                        life_current: 20,
                        life_max: 20,
                        exp: 0,
                    },
                });
                return { character, attributes };
            }));
            return character;
        });
    }
}
exports.Characterrepository = Characterrepository;
