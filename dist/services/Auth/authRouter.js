"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const index_1 = require("./index");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post('/', (req, res) => {
    return index_1.authCreateController.handle(req, res);
});
