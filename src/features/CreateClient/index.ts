import { container } from 'tsyringe';

import IClientsRepository from '../../repositories/IClientsRepository';
import ClientsRepository from '../../database/repositories/ClientsRepository';

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository,
);
