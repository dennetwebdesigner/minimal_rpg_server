import jwt from 'jsonwebtoken';
import { promisify } from 'util';


import { authConfig } from '../../config/authConfig';

import { setNewError, NOT_FOUND_CONTENT, BAD_REQUEST, getNewError } from './../Error/CustomErrors';


export const tokenResolve = async (token_validate: string): Promise<{ id: string } | { error: string; status: number }> => {
  try {
    const [_, token] = token_validate.split(' ');

    if (!token || token.length <= 0)
      throw new Error(
        setNewError(NOT_FOUND_CONTENT, '[RMTV005] Necessario realizar o login, caso o erro continue entre em contato com o desenvolvedor!'),
      );

    const resolve = promisify<string, string>(jwt.verify);
    const { id } = (await resolve(token, authConfig.key)) as any;

    return { id };
  } catch (error: any) {
    console.log(error);
    if (error.message == 'jwt expired') return { error: 'token expirado!', status: BAD_REQUEST };
    if (error.message == 'invalid signature') {
      return { error: 'token expirado!', status: BAD_REQUEST };
    }
    if (error.message == "Cannot read properties of undefined (reading 'split')") {
      return { error: 'Necessario realizar o login!', status: BAD_REQUEST };
    }

    const data = getNewError(error.message);

    if (data.status) {
      return { error: data.log, status: data.status };
    }

    return { error: 'Erro ao tentar realizar esta ação, por favor tente novamente mais tarde', status: 400 };
  }
};
