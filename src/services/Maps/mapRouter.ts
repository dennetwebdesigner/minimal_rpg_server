import { Request, Response, Router } from 'express';

import { mapFindController } from './Find';

const mapRouter = Router();

mapRouter.get('/', (req: Request, res: Response) => {
  return mapFindController.handle(req, res);
});

mapRouter.get('/*', (req: Request, res: Response) => {
  return res.status(400).json('Rota Não Existe');
});

export { mapRouter };
