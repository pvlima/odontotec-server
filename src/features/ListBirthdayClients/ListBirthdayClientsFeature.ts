import { injectable, inject } from 'tsyringe';
import Client from '../../database/entities/Client';
import IClientsRepository from '../../repositories/IClientsRepository';

@injectable()
export default class ListBirthdayClientsFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(date: Date): Promise<Client[]> {
    const birthdays = await this.clientsRepository.findAllByBirth(date);
    return birthdays;
  }
}
