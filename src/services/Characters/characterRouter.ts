import { Router, Request, Response } from 'express';

import { characterCreateController } from './create/index';

import { characterRemoveController } from './remove';
import { characterSelectController } from './select';

const characterRouter = Router();

characterRouter.post('/', async (req: Request, res: Response) => {
  return characterCreateController.handle(req, res);
});

characterRouter.get('/', async (req: Request, res: Response) => {
  return characterSelectController.handle(req, res);
});

characterRouter.delete('/:id', async (req: Request, res: Response) => {
  return characterRemoveController.handle(req, res);
});

export { characterRouter };
