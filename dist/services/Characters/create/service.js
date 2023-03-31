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
exports.CharacterCreateService = void 0;
const CustomErrors_1 = require("./../../Error/CustomErrors");
class CharacterCreateService {
    constructor(repository) {
        this.repository = repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, id } = data;
            if (!name || !id)
                throw new Error((0, CustomErrors_1.setNewError)(CustomErrors_1.NOT_FOUND_CONTENT, 'Dados incompletos!'));
            const hasChar = yield this.repository.findByName({ name });
            if (hasChar)
                throw new Error((0, CustomErrors_1.setNewError)(CustomErrors_1.BAD_REQUEST, 'Este nome já esta em uso!'));
            return yield this.repository.store({ id, name });
        });
    }
}
exports.CharacterCreateService = CharacterCreateService;
