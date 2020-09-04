import { container } from 'tsyringe';

import IClientsRepository from './IClientsRepository';
import ClientsRepository from '../database/repositories/ClientsRepository';

import IUsersRepository from './IUsersRepository';
import UsersRepository from '../database/repositories/UsersRepository';

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
