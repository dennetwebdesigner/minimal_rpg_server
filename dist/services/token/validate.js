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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenResolve = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const util_1 = require("util");
const authConfig_1 = require("../../config/authConfig");
const CustomErrors_1 = require("./../Error/CustomErrors");
const tokenResolve = (token_validate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [_, token] = token_validate.split(' ');
        if (!token || token.length <= 0)
            throw new Error((0, CustomErrors_1.setNewError)(CustomErrors_1.NOT_FOUND_CONTENT, 'Necessario realizar o login, caso o erro continue entre em contato com o desenvolvedor!'));
        const resolve = (0, util_1.promisify)(jsonwebtoken_1.default.verify);
        const { id } = (yield resolve(token, authConfig_1.authConfig.key));
        return { id };
    }
    catch (error) {
        if (error.message == 'jwt expired')
            return { error: 'token expirado!', status: CustomErrors_1.BAD_REQUEST };
        if (error.message == 'invalid signature') {
            return { error: 'token expirado!', status: CustomErrors_1.BAD_REQUEST };
        }
        if (error.message == "Cannot read properties of undefined (reading 'split')") {
            return { error: 'Necessario realizar o login!', status: CustomErrors_1.BAD_REQUEST };
        }
        const data = (0, CustomErrors_1.getNewError)(error.message);
        if (data.status) {
            return { error: data.log, status: data.status };
        }
        return { error: 'Erro ao tentar realizar esta ação, por favor tente novamente mais tarde', status: 400 };
    }
});
exports.tokenResolve = tokenResolve;
