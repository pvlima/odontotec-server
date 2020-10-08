import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteClientRecordsFeature from './DeleteClientRecordsFeature';

export default class DeleteClientRecordsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { client_id } = req.params;

    const deleteClientRecords = container.resolve(DeleteClientRecordsFeature);
    await deleteClientRecords.execute(client_id);

    return res.status(201).send();
  }
}
