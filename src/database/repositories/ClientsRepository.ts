import { Repository, getRepository, Raw } from 'typeorm';
import { format } from 'date-fns';

import Client from '../entities/Client';
import IClientsRepository, {
  FindClientsConditions,
} from '../../repositories/IClientsRepository';
import ICreateClientDTO from '../../features/CreateClient/ICreateClientDTO';

export default class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findAll(conditions?: FindClientsConditions): Promise<Client[]> {
    let clients: Client[] = [];
    if (conditions?.name) {
      clients = await this.ormRepository.find({
        name: Raw(alias => `${alias} ILIKE '%${conditions.name}%'`),
      });
    } else {
      clients = await this.ormRepository.find();
    }

    return clients;
  }

  public async count(): Promise<number> {
    const count = await this.ormRepository.count();

    return count;
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);
    return client;
  }

  public async findAllByBirth(date: Date): Promise<Client[]> {
    const parsedDate = format(date, 'dd-MM');

    const birthdays = await this.ormRepository.find({
      where: {
        birth: Raw(field => `to_char(${field}, 'DD-MM') = '${parsedDate}'`),
      },
    });

    return birthdays;
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

  public async deleteById(id: string): Promise<boolean> {
    const test = await this.ormRepository.delete({ id });
    return !!test.affected;
  }
}
