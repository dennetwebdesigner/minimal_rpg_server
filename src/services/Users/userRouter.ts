import { Request, Response, Router } from 'express';

import { userCreateController } from './Create';

const userRouter = Router();

userRouter.post('/', async (req: Request, res: Response) => {
  return await userCreateController.handle(req, res);
});

export { userRouter };
