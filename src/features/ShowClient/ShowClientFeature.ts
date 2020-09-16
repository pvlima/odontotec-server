import { injectable, inject } from 'tsyringe';
import IClientsRepository from '../../repositories/IClientsRepository';
import Client from '../../database/entities/Client';

@injectable()
export default class ShowClientFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(id: string): Promise<Client | undefined> {
    const client = await this.clientsRepository.findById(id);

    return client;
  }
}
