import { Request, Response } from 'express';

import { getNewError } from '../../Error/CustomErrors';
import { UserCreateService } from './service';

export class UserCreateController {
  private service: UserCreateService;
  constructor(service: UserCreateService) {
    this.service = service;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    try {
      const user = await this.service.execute(data);
      return res.json(user);
    } catch (error: any) {
      const data = getNewError(error.message);
      if (data.status) {
        return res.status(data.status).json({ message: data.log });
      }

      return res.status(400).json({ message: error.message });
    }
  }
}
