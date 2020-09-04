import { container } from 'tsyringe';

import UsersRepository from '../../database/repositories/UsersRepository';
import IUsersRepository from '../../repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
