import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientRecordFeature from './CreateClientRecordFeature';

export default class CreateClientRecordController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { client_id, records } = req.body;

    const createClientRecord = container.resolve(CreateClientRecordFeature);
    const client = await createClientRecord.execute({
      client_id,
      records,
    });

    return res.json(client);
  }
}
