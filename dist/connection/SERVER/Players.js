"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_server_player = exports.update_server_player = exports.find_server_player = exports.add_server_player = void 0;
const SERVER_PLAYERS = {};
const add_server_player = (player) => {
    SERVER_PLAYERS[player.id] = player;
};
exports.add_server_player = add_server_player;
const find_server_player = (key) => {
    return SERVER_PLAYERS[key];
};
exports.find_server_player = find_server_player;
const update_server_player = (key, data) => {
    SERVER_PLAYERS[key] = Object.assign(Object.assign({}, SERVER_PLAYERS[key]), data);
};
exports.update_server_player = update_server_player;
const remove_server_player = (key) => {
    delete SERVER_PLAYERS[key];
};
exports.remove_server_player = remove_server_player;
