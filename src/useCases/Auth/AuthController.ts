import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthUseCase from './AuthUseCase';

export default class AuthController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const auth = container.resolve(AuthUseCase);
    const response = await auth.execute({ email, password });

    return res.json(response);
  }
}
