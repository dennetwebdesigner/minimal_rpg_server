import { Socket } from 'socket.io';


import { getNewError } from '../Error/CustomErrors';
import { tokenResolve } from '../token/validate';


export default async (socket: Socket) => {
  try {
    const auth = socket.handshake.auth.token as string;
    const data = (await tokenResolve(auth)) as any;
    if (data.error) return JSON.stringify({ message: data.error });
    socket.data.userId = data.id;
    return data;
  } catch (error: any) {
    const data = getNewError(error.message);
    if (data.status) return JSON.stringify({ message: data.log });
    return JSON.stringify({ message: 'Ocorreu um erro com sua authentificação.' });
  }
};
