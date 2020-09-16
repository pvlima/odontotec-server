import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteClientFeature from './DeleteClientFeature';

export default class DeleteClientController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteClient = container.resolve(DeleteClientFeature);
    await deleteClient.execute(id);

    return res.status(201).send();
  }
}
