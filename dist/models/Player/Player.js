"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(data) {
        this.name = data.name;
        this.level = data.level;
        this.attributes = data.attributes;
    }
}
exports.Player = Player;
