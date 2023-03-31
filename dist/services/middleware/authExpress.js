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
const CustomErrors_1 = require("../Error/CustomErrors");
const validate_1 = require("../token/validate");
const CustomErrors_2 = require("./../Error/CustomErrors");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = req.headers.authorization;
        const data = (yield (0, validate_1.tokenResolve)(auth));
        if (data.error)
            return res.status(data.status).json({ message: data.error });
        req.userId = data.id;
        next();
    }
    catch (error) {
        const data = (0, CustomErrors_1.getNewError)(error.message);
        if (data.status)
            return res.status(data.status).json({ message: data.log });
        return res.status(CustomErrors_2.BAD_REQUEST).json({ message: 'Ocorreu um erro com sua authentificação.' });
    }
});
