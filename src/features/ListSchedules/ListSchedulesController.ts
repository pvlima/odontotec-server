import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSchedulesFeature from './ListSchedulesFeature';

export default class ListSchedulesController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { office_id } = req.user;
    const { date } = req.query;

    const listSchedules = container.resolve(ListSchedulesFeature);
    const schedules = await listSchedules.execute({
      office_id,
      date: date ? new Date(String(date)) : undefined,
    });
    return res.json(schedules);
  }
}
