import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateScheduleFeature from './CreateScheduleFeature';

export default class CreateScheduleController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { user_id, date, time, client_id, procedure } = req.body;

    const { office_id } = req.user;

    const createSchedule = container.resolve(CreateScheduleFeature);
    const schedule = await createSchedule.execute({
      user_id,
      date,
      time,
      client_id,
      office_id,
      procedure,
    });

    return res.json(schedule);
  }
}
