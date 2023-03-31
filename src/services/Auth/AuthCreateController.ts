import { Request, Response } from 'express';


import { getNewError } from '../Error/CustomErrors';
import { BAD_REQUEST } from './../Error/CustomErrors';
import { AuthCreateService } from './AuthCreateService';


export class AuthCreateController {
  private service: AuthCreateService;
  constructor(service: AuthCreateService) {
    this.service = service;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body;
      const token = await this.service.execute({ username, password });
      return res.json({ token });
    } catch (error: any) {
      const data = getNewError(error.message);

      if (data.status) return res.status(data.status).json({ message: data.log });
      return res.status(BAD_REQUEST).json({ message: error.message });
    }
  }
}
