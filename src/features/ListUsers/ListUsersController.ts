import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListUsersFeature from './ListUsersFeature';

export default class ListUsersController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersFeature);
    const users = await listUsers.execute();
    return res.json(users);
  }
}
