import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthFeature from './AuthFeature';

export default class AuthController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const auth = container.resolve(AuthFeature);
    const response = await auth.execute({ email, password });

    return res.json(response);
  }
}
