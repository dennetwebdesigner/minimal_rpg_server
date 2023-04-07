import { Socket } from 'socket.io';

import { add_server_player } from '../SERVER/Players';
import { BAD_REQUEST } from './../../services/Error/CustomErrors';
import { remove_server_player, find_server_player } from './../SERVER/Players';

export const _logout_player = async (connection: Socket) => {
  connection.on('_logout_player', (key: string) => {
    const player = find_server_player(key);
    remove_server_player(key);
    // connection.broadcast.emit('_system_log', { message: `${player.name} sai do jogo.` });

    connection.emit('_logout_player', {});
  });
};
