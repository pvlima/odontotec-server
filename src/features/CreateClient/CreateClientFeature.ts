import { injectable, inject } from 'tsyringe';
import Client from '../../database/entities/Client';
import IClientsRepository from '../../repositories/IClientsRepository';
import ICreateClientDTO from './ICreateClientDTO';
import AppError from '../../errors/AppError';

@injectable()
export default class CreateClientFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(data: ICreateClientDTO): Promise<Client> {
    const checkPhoneExists = await this.clientsRepository.findByPhone(
      data.phone,
    );

    if (checkPhoneExists) {
      throw new AppError('Phone already exists');
    }

    const client = await this.clientsRepository.create(data);

    return client;
  }
}
