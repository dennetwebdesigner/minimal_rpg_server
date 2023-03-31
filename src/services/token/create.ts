import jwt from 'jsonwebtoken';


import { authConfig } from '../../config/authConfig';


export const tokenCreate = async (id: string): Promise<string> => {
  const token = jwt.sign({ id, exp: authConfig.exp }, authConfig.key);
  return token;
};
