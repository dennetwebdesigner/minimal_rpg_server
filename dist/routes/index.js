"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const authRouter_1 = require("../services/Auth/authRouter");
const characterRouter_1 = require("../services/Characters/characterRouter");
const authExpress_1 = __importDefault(require("../services/middleware/authExpress"));
const userRouter_1 = require("../services/Users/userRouter");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/users', userRouter_1.userRouter);
routes.use('/auth', authRouter_1.authRouter);
routes.use('/character', authExpress_1.default, characterRouter_1.characterRouter);
routes.get('/test', authExpress_1.default, (req, res) => {
    return res.json({ id: req.userId });
});
