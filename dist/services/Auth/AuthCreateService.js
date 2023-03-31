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
exports.AuthCreateService = void 0;
const Crypt_1 = require("../Crypt");
const CustomErrors_1 = require("../Error/CustomErrors");
const create_1 = require("../token/create");
class AuthCreateService {
    constructor(repository) {
        this.repository = repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = data;
            if (!username || !password)
                throw new Error((0, CustomErrors_1.setNewError)(CustomErrors_1.NOT_FOUND_CONTENT, 'Esta faltando dados!'));
            const user = yield this.repository.findByUsername({ username });
            if (!user)
                throw new Error((0, CustomErrors_1.setNewError)(CustomErrors_1.BAD_REQUEST, 'Está conta não existe!'));
            const pass_validate = yield (0, Crypt_1.password_validate)(password, user.password);
            if (!pass_validate)
                throw new Error((0, CustomErrors_1.setNewError)(CustomErrors_1.BAD_REQUEST, 'Dados não são validos!'));
            const token = yield (0, create_1.tokenCreate)(user.id);
            return token;
        });
    }
}
exports.AuthCreateService = AuthCreateService;
