import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DashboardInfoFeature from './DashboardInfoFeature';

export default class DashboardInfoController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const dashboardInfo = container.resolve(DashboardInfoFeature);
    const info = await dashboardInfo.execute();
    return res.json(info);
  }
}
