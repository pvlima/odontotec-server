import { container } from 'tsyringe';

import IClientsRepository from './IClientsRepository';
import ClientsRepository from '../database/repositories/ClientsRepository';

import IUsersRepository from './IUsersRepository';
import UsersRepository from '../database/repositories/UsersRepository';

import ISchedulesRepository from './ISchedulesRepository';
import SchedulesRepository from '../database/repositories/SchedulesRepository';

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ISchedulesRepository>(
  'SchedulesRepository',
  SchedulesRepository,
);
