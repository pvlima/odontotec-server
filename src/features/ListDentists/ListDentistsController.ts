import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListDentistsFeature from './ListDentistsFeature';

export default class ListDentistsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listDentists = container.resolve(ListDentistsFeature);
    const dentists = await listDentists.execute();
    return res.json(dentists);
  }
}
