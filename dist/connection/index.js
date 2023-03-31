"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection_multiplayer = void 0;
const socket_io_1 = __importDefault(require("socket.io"));
const imports_1 = __importDefault(require("./methods/imports"));
const connection_multiplayer = (server) => {
    const io = new socket_io_1.default.Server(server, { cors: { origin: '*' } });
    io.on('connection', (socket) => {
        imports_1.default.forEach((method) => method(socket));
    });
};
exports.connection_multiplayer = connection_multiplayer;
