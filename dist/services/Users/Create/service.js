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
exports.UserCreateService = void 0;
const CustomErrors_1 = require("../../Error/CustomErrors");
const index_1 = require("./../../Crypt/index");
class UserCreateService {
    constructor(repository) {
        this.repository = repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = data;
            if (!username || !password)
                throw new Error((0, CustomErrors_1.setNewError)(400, 'Dados incompletos.'));
            const hasUser = yield this.repository.findByUsername({ username });
            if (hasUser)
                throw new Error((0, CustomErrors_1.setNewError)(400, 'Esta Conta já esta em uso!'));
            const hash = yield (0, index_1.password_hash)(password);
            const user = yield this.repository.store({ username, password: hash });
            return user;
        });
    }
}
exports.UserCreateService = UserCreateService;
