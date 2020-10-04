import ClientRecord from '../database/entities/ClientRecord';
import ICreateClientRecordDTO from '../features/CreateClientRecord/ICreateClientRecordDTO';

export default interface IClientRecordsRepository {
  findAllByClientId(client_id: string): Promise<ClientRecord[]>;
  create(data: ICreateClientRecordDTO): Promise<ClientRecord>;
  createMany(data: ICreateClientRecordDTO[]): Promise<ClientRecord[]>;
  save(data: ClientRecord): Promise<ClientRecord>;
  deleteById(id: string): Promise<boolean>;
}
