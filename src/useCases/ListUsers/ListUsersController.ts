import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListUsersUseCase from './ListUsersUseCase';

export default class ListUsersController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersUseCase);
    const users = await listUsers.execute();
    return res.json(users);
  }
}
