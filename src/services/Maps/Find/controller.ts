import { Request, Response } from 'express';

import { BAD_REQUEST, getNewError } from '../../Error/CustomErrors';
import { MapFindService } from './service';

export class MapFindController {
  private service: MapFindService;
  constructor(service: MapFindService) {
    this.service = service;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const map = this.service.execute();
      return res.json(map);
    } catch (error: any) {
      const data = getNewError(error.message);
      if (data.status) {
        return res.status(data.status).json({ message: data.log });
      }

      return res.status(BAD_REQUEST).json({ message: 'Controle de Mapas: Verifque o log de error, ou entre em contato co o Desenvolvedor!' });
    }
  }
}
