import { Socket } from 'socket.io';

import { Characterrepository } from '../../repositories/implementations/CharacterRepository';
import {} from '../../services/Error/CustomErrors';
import { add_server_player } from '../SERVER/Players';
import { BAD_REQUEST } from './../../services/Error/CustomErrors';
import { find_server_player, remove_server_player } from './../SERVER/Players';

export const _add_player = (connection: Socket) => {
  connection.on('_new_player', async ({ player }: { player: any }) => {
    remove_server_player(player.player_id);

    //NECESSARIO ALTERAR
    const characterrepository = new Characterrepository();
    const character = await characterrepository.findById({ id: player.character_id });

    const hasPlayer = find_server_player(player.player_id);

    if (hasPlayer) {
      connection.emit('error', { status: BAD_REQUEST, message: 'Este personagem já esta conectado' });
      return;
    }

    connection.emit('_system_log', { message: `${character.name} entrou no jogo.` });
    connection.broadcast.emit('_system_log', { message: `${character.name} entrou no jogo.` });
    add_server_player({ id: player.player_id, character });
  });
};
