import { injectable, inject } from 'tsyringe';
import ClientRecord from '../../database/entities/ClientRecord';
import IClientRecordsRepository from '../../repositories/IClientRecordsRepository';

@injectable()
export default class ListClientRecordsFeature {
  constructor(
    @inject('ClientRecordsRepository')
    private clientRecordsRepository: IClientRecordsRepository,
  ) {}

  public async execute(client_id: string): Promise<ClientRecord[]> {
    const records = await this.clientRecordsRepository.findAllByClientId(
      client_id,
    );
    return records;
  }
}
