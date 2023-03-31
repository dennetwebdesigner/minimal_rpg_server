"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterCreateController = void 0;
const CharacterRepository_1 = require("../../../repositories/implementations/CharacterRepository");
const controller_1 = require("./controller");
const service_1 = require("./service");
const characterrepository = new CharacterRepository_1.Characterrepository();
const characterCreateService = new service_1.CharacterCreateService(characterrepository);
exports.characterCreateController = new controller_1.CharacterCreateController(characterCreateService);
