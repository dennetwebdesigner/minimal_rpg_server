"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._add_player = void 0;
const Players_1 = require("../SERVER/Players");
const CustomErrors_1 = require("./../../services/Error/CustomErrors");
const Players_2 = require("./../SERVER/Players");
const _add_player = (connection) => {
    connection.on('_new_player', ({ player }) => {
        (0, Players_2.remove_server_player)(player.id);
        const hasPlayer = (0, Players_2.find_server_player)(player.id);
        if (hasPlayer) {
            connection.emit('error', { status: CustomErrors_1.BAD_REQUEST, message: 'Este personagem já esta conectado' });
            return;
        }
        connection.emit('_system_log', { message: `${player.name} entrou no jogo.` });
        connection.broadcast.emit('_system_log', { message: `${player.name} entrou no jogo.` });
        (0, Players_1.add_server_player)(player);
    });
};
exports._add_player = _add_player;
