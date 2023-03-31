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
exports.CharacterCreateController = void 0;
const CustomErrors_1 = require("./../../Error/CustomErrors");
class CharacterCreateController {
    constructor(service) {
        this.service = service;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.userId;
                const { name } = req.body;
                const character = yield this.service.execute({ id, name });
                return res.json(character);
            }
            catch (error) {
                const data = (0, CustomErrors_1.getNewError)(error.message);
                if (data.status) {
                    return res.status(data.status).json({ message: data.log });
                }
                console.log('\n\n', error, '\n\n');
                return res.status(CustomErrors_1.BAD_REQUEST).json({ message: 'Houve algum erro, confira o log, ou entre em contato com o desenvolvedor!' });
            }
            return res.json();
        });
    }
}
exports.CharacterCreateController = CharacterCreateController;
