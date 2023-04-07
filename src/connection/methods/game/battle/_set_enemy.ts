import { Socket } from 'socket.io';

import Maps from '../../../../core/Maps';
import Monsters from '../../../../core/Monsters';
import authSocket from '../../../../services/middleware/authSocket';
import { find_server_player, update_server_character, update_server_player } from '../../../SERVER/Players';

export const _set_enemy = (connection: Socket) => {
  connection.on('_battle/set_enemy', async (data: { characterId: string; enemy: string }) => {
    try {
      await authSocket(connection);

      const monster = Monsters.map((element) => {
        return new element({});
      });

      const find = monster.find((m) => m.name == data.enemy);
      update_server_character(data.characterId, { key: 'enemy', value: find });

      const client_send_data = find as any;
      if (find?.reward) delete client_send_data?.reward;

      connection.emit('_battle/set_enemy', client_send_data);
    } catch (error) {
      console.log(error);
    }
  });
};
