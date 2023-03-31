"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._logout_player = void 0;
const Players_1 = require("./../SERVER/Players");
const _logout_player = (connection) => {
    connection.on('_logout_player', (key) => {
        const player = (0, Players_1.find_server_player)(key);
        (0, Players_1.remove_server_player)(key);
        connection.broadcast.emit('_system_log', { message: `${player.name} sai do jogo.` });
        connection.emit('_logout_player', {});
    });
};
exports._logout_player = _logout_player;
