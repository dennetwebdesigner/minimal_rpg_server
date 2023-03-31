import { Request, Response, Router } from 'express';


import { authCreateController } from './index';


const authRouter = Router();

authRouter.post('/', (req: Request, res: Response): Promise<Response> => {
  return authCreateController.handle(req, res);
});

export { authRouter };
