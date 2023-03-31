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
exports.CharacterRemoveService = void 0;
const CustomErrors_1 = require("../../Error/CustomErrors");
const CustomErrors_2 = require("./../../Error/CustomErrors");
class CharacterRemoveService {
    constructor(repository) {
        this.repository = repository;
    }
    excute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error((0, CustomErrors_1.setNewError)(CustomErrors_2.NOT_FOUND_CONTENT, ''));
            return yield this.repository.remove({ id });
        });
    }
}
exports.CharacterRemoveService = CharacterRemoveService;
