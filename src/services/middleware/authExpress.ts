import { NextFunction, Request, Response } from 'express';

import { getNewError } from '../Error/CustomErrors';
import { tokenResolve } from '../token/validate';
import { BAD_REQUEST } from './../Error/CustomErrors';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization as string;

    const data = (await tokenResolve(auth)) as any;

    if (data.error) return res.status(data.status).json({ message: data.error });

    req.userId = data.id;
    next();
  } catch (error: any) {
    const data = getNewError(error.message);
    if (data.status) return res.status(data.status).json({ message: data.log });
    return res.status(BAD_REQUEST).json({ message: 'Ocorreu um erro com sua authentificação.' });
  }
};
