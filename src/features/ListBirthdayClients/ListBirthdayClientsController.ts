import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListBirthdayClientsFeature from './ListBirthdayClientsFeature';

export default class ListBirthdayClientsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listBirthdays = container.resolve(ListBirthdayClientsFeature);
    const birthdays = await listBirthdays.execute(new Date());
    return res.json(birthdays);
  }
}
