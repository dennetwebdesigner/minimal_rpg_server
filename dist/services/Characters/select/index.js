"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterSelectController = void 0;
const CharacterRepository_1 = require("../../../repositories/implementations/CharacterRepository");
const controller_1 = require("./controller");
const service_1 = require("./service");
const characterrepository = new CharacterRepository_1.Characterrepository();
const characterSelectService = new service_1.CharacterSelectService(characterrepository);
exports.characterSelectController = new controller_1.CharacterSelectController(characterSelectService);
