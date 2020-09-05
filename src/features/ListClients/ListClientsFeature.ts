import { injectable, inject } from 'tsyringe';
import IClientsRepository, {
  FindClientsConditions,
} from '../../repositories/IClientsRepository';
import Client from '../../database/entities/Client';

@injectable()
export default class ListClientsFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(conditions?: FindClientsConditions): Promise<Client[]> {
    const clients = await this.clientsRepository.findAll(conditions);

    return clients;
  }
}
