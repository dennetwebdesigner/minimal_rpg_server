import { Socket } from 'socket.io';

import { battle_attack } from '../../../../core/battle/attack';
import { enemy_has_died } from '../../../../core/states_base/hasdied/enemy';
import { player_has_died } from '../../../../core/states_base/hasdied/player';
import authSocket from '../../../../services/middleware/authSocket';
import { find_server_player, update_server_character, update_server_player } from '../../../SERVER/Players';

export const _attack = (connection: Socket) => {
  connection.on('_battle/attack', async () => {
    try {
      await authSocket(connection);
      const id = connection.data.userId;
      const player = find_server_player(id);
      const character = player.character.Attributes[0];
      const { enemy } = player.character;
      const response_attack: any = await battle_attack({ enemy, character });

      const info_player = {
        life: {
          current: response_attack.character.life_current,
        },
      };

      const info_enemy = {
        life: {
          current: response_attack.enemy.life.current,
        },
      };

      const lifeValidatePlayer: any = player_has_died({ key: id, life: info_player.life.current });

      const lifeValidateEnemy: any = enemy_has_died({ key: id, life: info_enemy.life.current });
      // console.log(lifeValidatePlayer, lifeValidateEnemy);
      if (lifeValidatePlayer && lifeValidatePlayer.message) {
        connection.emit('game_over/died', lifeValidatePlayer);
        return;
      }

      if (lifeValidateEnemy && lifeValidateEnemy.message) {
        connection.emit('battle/winner', lifeValidateEnemy);
        return;
      }

      update_server_character(id, { key: 'Attributes', value: [response_attack.character] });
      update_server_character(id, { key: 'enemy', value: response_attack.enemy });

      connection.emit('_battle/attack', { type: 'player', data: info_player });

      setTimeout(() => connection.emit('_battle/attack', { type: 'enemy', data: info_enemy }), 700);

      //   console.log(response_attack);
    } catch (e) {
      console.log(e);
    }
  });
};
