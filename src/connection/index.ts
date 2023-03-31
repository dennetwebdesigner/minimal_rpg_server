import { Server } from 'http';
import socketio, { Socket } from 'socket.io';

import allMethods from './methods/imports';

export const connection_multiplayer = (server: Server) => {
  const io = new socketio.Server(server, { cors: { origin: '*' } });

  io.on('connection', (socket: Socket) => {
    allMethods.forEach((method) => method(socket));
  });
};
