"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterRemoveController = void 0;
const CharacterRepository_1 = require("../../../repositories/implementations/CharacterRepository");
const controller_1 = require("./controller");
const service_1 = require("./service");
const characterrepository = new CharacterRepository_1.Characterrepository();
const characterRemoveService = new service_1.CharacterRemoveService(characterrepository);
exports.characterRemoveController = new controller_1.CharacterRemoveController(characterRemoveService);
