import { find_server_player, update_server_character, update_server_player } from '../../../connection/SERVER/Players';
import { remove_enemy } from '../remove_enemy';

export const player_has_died = ({ life, key }: { life: number; key: string }) => {
  if (life <= 0) {
    const { character } = find_server_player(key);
    const name = character.name;
    character.Attributes[0].life_current = character.Attributes[0].life_max;

    update_server_character(key, {
      key: 'Attributes',
      value: character.Attributes,
    });
    const response = {
      message: `${name} está morto`,
      status: true,
      life: character.Attributes.life_current,
    };
    remove_enemy(key);
    return response;
  } else return false;
};
