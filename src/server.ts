import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { Server, createServer } from 'http';


import { connection_multiplayer } from './connection';

import { routes } from './routes';
import { tokenCreate } from './services/token/create';
import { tokenResolve } from './services/token/validate';


const app: Application = express();
const server: Server = createServer(app);

app.use(cors());
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  return res.json({ api: 'api online' });
});

app.use(routes);

connection_multiplayer(server);
export { server };
