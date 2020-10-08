import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListClientRecordsFeature from './ListClientRecordsFeature';

export default class ListClientRecordsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { client_id } = req.query;

    const listRecords = container.resolve(ListClientRecordsFeature);
    const records = await listRecords.execute(String(client_id));
    return res.json(records);
  }
}
