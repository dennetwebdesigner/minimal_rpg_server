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
exports.UserCreateController = void 0;
const CustomErrors_1 = require("../../Error/CustomErrors");
class UserCreateController {
    constructor(service) {
        this.service = service;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const user = yield this.service.execute(data);
                return res.json(user);
            }
            catch (error) {
                const data = (0, CustomErrors_1.getNewError)(error.message);
                if (data.status) {
                    return res.status(data.status).json({ message: data.log });
                }
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.UserCreateController = UserCreateController;
