const SERVER_PLAYERS: any = {};

export const add_server_player = (player: any) => {
  SERVER_PLAYERS[player.id] = player;
};

export const find_server_player = (key: string) => {
  return SERVER_PLAYERS[key];
};

export const update_server_player = (key: string, data: { key: string; value: any }) => {
  SERVER_PLAYERS[key][data.key] = data.value;
};

export const update_server_character = (key: string, data: { key: string; value: any }) => {
  SERVER_PLAYERS[key].character[data.key] = data.value;
};

export const remove_server_player = (key: string) => {
  delete SERVER_PLAYERS[key];
};
