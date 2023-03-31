"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCreateController = void 0;
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const AuthCreateController_1 = require("./AuthCreateController");
const AuthCreateService_1 = require("./AuthCreateService");
const userRepository = new UserRepository_1.UserRepository();
const authCreateService = new AuthCreateService_1.AuthCreateService(userRepository);
exports.authCreateController = new AuthCreateController_1.AuthCreateController(authCreateService);
