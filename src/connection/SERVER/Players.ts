const SERVER_PLAYERS: any = {};

export const add_server_player = (player: any) => {
  SERVER_PLAYERS[player.id] = player;
};

export const find_server_player = (key: string) => {
  return SERVER_PLAYERS[key];
};

export const update_server_player = (key: string, data: any) => {
  SERVER_PLAYERS[key] = { ...SERVER_PLAYERS[key], ...data };
};
export const remove_server_player = (key: string) => {
  delete SERVER_PLAYERS[key];
};
