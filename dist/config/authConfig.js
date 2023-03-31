"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
exports.authConfig = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    key: 'test-test',
};
