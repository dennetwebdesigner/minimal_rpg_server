import { find_server_player } from '../../../connection/SERVER/Players';
import { remove_enemy } from '../remove_enemy';

export const enemy_has_died = ({ life, key }: { life: number; key: string }) => {
  if (life <= 0) {
    const { enemy } = find_server_player(key).character;
    console.log(enemy);
    const name = enemy.name;
    const response = {
      message: `${name} está morto`,
      reward: enemy.reward(),
    };
    setTimeout(() => remove_enemy(key), 400);
    return response;
  } else return false;
};
