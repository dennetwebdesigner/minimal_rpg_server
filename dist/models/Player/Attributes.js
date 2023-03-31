"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attributes {
    constructor(data) {
        this.attack = data.attack;
        this.life = data.life;
        this.life.current = this.life.max;
        if (!data.attack) {
        }
    }
    setAttack() {
        return { min: 1, max: 3 };
    }
    setLife() {
        return { min: 19, current: 19 };
    }
}
