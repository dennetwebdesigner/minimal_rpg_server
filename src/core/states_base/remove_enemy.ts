import { find_server_player, update_server_character } from '../../connection/SERVER/Players';

export const remove_enemy = (key: string) => {
  update_server_character(key, { key: 'enemy', value: null });
};
