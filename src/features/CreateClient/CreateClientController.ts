import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientFeature from './CreateClientFeature';

export default class CreateClientController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      alias,
      email,
      phone,
      rg,
      cpf,
      birth,
      address,
      city,
    } = req.body;

    const createClient = container.resolve(CreateClientFeature);
    const client = await createClient.execute({
      name,
      alias,
      email,
      phone,
      rg,
      cpf,
      birth,
      address,
      city,
    });

    return res.json(client);
  }
}
