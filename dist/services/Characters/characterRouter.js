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
exports.characterRouter = void 0;
const express_1 = require("express");
const index_1 = require("./create/index");
const remove_1 = require("./remove");
const select_1 = require("./select");
const characterRouter = (0, express_1.Router)();
exports.characterRouter = characterRouter;
characterRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return index_1.characterCreateController.handle(req, res);
}));
characterRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return select_1.characterSelectController.handle(req, res);
}));
characterRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return remove_1.characterRemoveController.handle(req, res);
}));
