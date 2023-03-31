import { Socket } from 'socket.io';

import {} from '../../services/Error/CustomErrors';
import { add_server_player } from '../SERVER/Players';
import { BAD_REQUEST } from './../../services/Error/CustomErrors';
import { find_server_player, remove_server_player } from './../SERVER/Players';

export const _add_player = (connection: Socket) => {
  connection.on('_new_player', ({ player }: { player: any }) => {
    remove_server_player(player.id);

    const hasPlayer = find_server_player(player.id);

    if (hasPlayer) {
      connection.emit('error', { status: BAD_REQUEST, message: 'Este personagem já esta conectado' });
      return;
    }

    connection.emit('_system_log', { message: `${player.name} entrou no jogo.` });
    connection.broadcast.emit('_system_log', { message: `${player.name} entrou no jogo.` });
    add_server_player(player);
  });
};
