import { Repository, getRepository } from 'typeorm';
import ICreateClientRecordDTO from '../../features/CreateClientRecord/ICreateClientRecordDTO';

import IClientRecordsRepository from '../../repositories/IClientRecordsRepository';
import ClientRecord from '../entities/ClientRecord';

export default class ClientRecordsRepository
  implements IClientRecordsRepository {
  private ormRepository: Repository<ClientRecord>;

  constructor() {
    this.ormRepository = getRepository(ClientRecord);
  }

  public async findAllByClientId(client_id: string): Promise<ClientRecord[]> {
    const clientRecords = await this.ormRepository.find({
      where: { client_id },
    });
    return clientRecords;
  }

  public async create(data: ICreateClientRecordDTO): Promise<ClientRecord> {
    const record = this.ormRepository.create(data);
    await this.ormRepository.save(record);

    return record;
  }

  public async createMany(
    data: ICreateClientRecordDTO[],
  ): Promise<ClientRecord[]> {
    const records = this.ormRepository.create(data);
    await this.ormRepository.save(records);

    return records;
  }

  public async save(record: ClientRecord): Promise<ClientRecord> {
    return this.ormRepository.save(record);
  }

  public async deleteById(id: string): Promise<boolean> {
    const deleted = await this.ormRepository.delete({ id });
    return !!deleted.affected;
  }

  public async deleteAllByClientId(client_id: string): Promise<boolean> {
    const deleted = await this.ormRepository.delete({ client_id });
    return !!deleted.affected;
  }
}
