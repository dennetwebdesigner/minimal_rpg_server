import { Request, Response } from 'express';

import { getNewError, BAD_REQUEST } from './../../Error/CustomErrors';
import { CharacterRemoveService } from './service';

export class CharacterRemoveController {
  private service: CharacterRemoveService;
  constructor(service: CharacterRemoveService) {
    this.service = service;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const data = await this.service.excute({ id });
      return res.json(data);
    } catch (error: any) {
      console.log(error);
      const { status, log } = getNewError(error.message);
      if (status) {
        return res.status(status).json({ message: log });
      }

      return res.status(BAD_REQUEST).json({ message: 'Houve um erro, diriga-se ao desenvolvedor!' });
    }
  }
}
