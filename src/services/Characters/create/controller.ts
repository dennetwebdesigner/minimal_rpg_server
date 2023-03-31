import { Request, Response } from 'express';

import { getNewError, BAD_REQUEST } from './../../Error/CustomErrors';
import { CharacterCreateService } from './service';

export class CharacterCreateController {
  private service: CharacterCreateService;
  constructor(service: CharacterCreateService) {
    this.service = service;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.userId;
      const { name } = req.body;
      const character = await this.service.execute({ id, name });
      return res.json(character);
    } catch (error: any) {
      const data = getNewError(error.message);

      if (data.status) {
        return res.status(data.status).json({ message: data.log });
      }
      console.log('\n\n', error, '\n\n');
      return res.status(BAD_REQUEST).json({ message: 'Houve algum erro, confira o log, ou entre em contato com o desenvolvedor!' });
    }

    return res.json();
  }
}
