import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateClientFeature from './UpdateClientFeature';

export default class UpdateClientController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

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

    const updateClient = container.resolve(UpdateClientFeature);
    const client = await updateClient.execute(id, {
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
