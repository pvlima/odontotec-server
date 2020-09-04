import { injectable, inject } from 'tsyringe';
import IClientsRepository from '../../repositories/IClientsRepository';
import Client from '../../database/entities/Client';

@injectable()
export default class ListClientsFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(): Promise<Client[]> {
    return this.clientsRepository.findAll();
  }
}
