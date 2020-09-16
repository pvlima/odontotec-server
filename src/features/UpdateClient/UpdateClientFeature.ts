import { injectable, inject } from 'tsyringe';
import Client from '../../database/entities/Client';
import IClientsRepository from '../../repositories/IClientsRepository';
import ICreateClientDTO from '../CreateClient/ICreateClientDTO';
import AppError from '../../errors/AppError';

@injectable()
export default class CreateClientFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(id: string, data: ICreateClientDTO): Promise<Client> {
    const client = await this.clientsRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found', 404);
    }

    Object.assign(client, data);

    // const checkPhoneExists = await this.clientsRepository.findByPhone(
    //   data.phone,
    // );

    // if (checkPhoneExists) {
    //   throw new AppError('Phone already exists');
    // }

    const UpdatedClient = await this.clientsRepository.save(client);

    return UpdatedClient;
  }
}
