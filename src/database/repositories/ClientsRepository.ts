import { Repository, getRepository } from 'typeorm';

import Client from '../entities/Client';
import IClientsRepository from '../../repositories/IClientsRepository';
import ICreateClientDTO from '../../features/CreateClient/ICreateClientDTO';

export default class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findAll(): Promise<Client[]> {
    const clients = await this.ormRepository.find();
    return clients;
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);
    return client;
  }

  public async findByPhone(phone: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne({ where: { phone } });
    return client;
  }

  public async create(data: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);
    await this.ormRepository.save(client);
    return client;
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }
}
