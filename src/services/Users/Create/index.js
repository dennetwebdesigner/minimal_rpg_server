"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreateController = void 0;
const UserRepository_1 = require("../../../repositories/implementations/UserRepository");
const controller_1 = require("./controller");
const service_1 = require("./service");
const userRepository = new UserRepository_1.UserRepository();
const userCreateService = new service_1.UserCreateService(userRepository);
exports.userCreateController = new controller_1.UserCreateController(userCreateService);
