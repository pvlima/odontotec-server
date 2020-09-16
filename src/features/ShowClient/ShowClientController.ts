import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowClientFeature from './ShowClientFeature';

export default class ShowClientController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showClient = container.resolve(ShowClientFeature);
    const client = await showClient.execute(id);

    return res.json(client);
  }
}
