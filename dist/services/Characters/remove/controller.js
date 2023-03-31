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
exports.CharacterRemoveController = void 0;
const CustomErrors_1 = require("./../../Error/CustomErrors");
class CharacterRemoveController {
    constructor(service) {
        this.service = service;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.service.excute({ id });
                return res.json(data);
            }
            catch (error) {
                console.log(error);
                const { status, log } = (0, CustomErrors_1.getNewError)(error.message);
                if (status) {
                    return res.status(status).json({ message: log });
                }
                return res.status(CustomErrors_1.BAD_REQUEST).json({ message: 'Houve um erro, diriga-se ao desenvolvedor!' });
            }
        });
    }
}
exports.CharacterRemoveController = CharacterRemoveController;
