import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteScheduleFeature from './DeleteScheduleFeature';

export default class DeleteScheduleController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteSchedule = container.resolve(DeleteScheduleFeature);
    await deleteSchedule.execute(id);

    return res.status(201).send();
  }
}
