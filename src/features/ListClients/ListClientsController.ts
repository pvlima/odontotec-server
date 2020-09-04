import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListClientsFeature from './ListClientsFeature';

export default class ListClientsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listClients = container.resolve(ListClientsFeature);

    const clients = await listClients.execute();

    return res.json(clients);
  }
}
