import { Request, Response } from 'express';

import { BAD_REQUEST } from '../../Error/CustomErrors';
import { iCharSelectDTO } from './CharSelectDTO';
import { CharacterSelectService } from './service';

export class CharacterSelectController {
  private service: CharacterSelectService;
  constructor(service: CharacterSelectService) {
    this.service = service;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const user_id = req.userId;
    try {
      const chars = await this.service.execute({ user_id });
      return res.json(chars);
    } catch (error: any) {
      return res.status(BAD_REQUEST).json({ message: error.message });
    }
  }
}
