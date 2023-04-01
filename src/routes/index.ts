import { Router } from 'express';

import { authRouter } from '../services/Auth/authRouter';
import { characterRouter } from '../services/Characters/characterRouter';
import { mapRouter } from '../services/Maps/mapRouter';
import authExpress from '../services/middleware/authExpress';
import { userRouter } from '../services/Users/userRouter';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);
routes.use('/character', authExpress, characterRouter);
routes.use('/map', authExpress, mapRouter);

routes.get('/test', authExpress, (req, res) => {
  return res.json({ id: req.userId });
});

export { routes };
