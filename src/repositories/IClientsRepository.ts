import Client from '../database/entities/Client';
import ICreateClientDTO from '../features/CreateClient/ICreateClientDTO';

export interface FindClientsConditions {
  name?: string;
}

export default interface IClientsRepository {
  findAll(conditions?: FindClientsConditions): Promise<Client[]>;
  findById(id: string): Promise<Client | undefined>;
  findByPhone(phone: string): Promise<Client | undefined>;
  findAllByBirth(date: Date): Promise<Client[]>;
  create(data: ICreateClientDTO): Promise<Client>;
  save(data: Client): Promise<Client>;
  deleteById(id: string): Promise<boolean>;
  count(): Promise<number>;
}
