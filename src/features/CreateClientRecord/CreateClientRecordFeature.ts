import { injectable, inject } from 'tsyringe';

import IClientRecordsRepository from '../../repositories/IClientRecordsRepository';
import ClientRecord from '../../database/entities/ClientRecord';

interface IClientRecord {
  procedure: string;
  is_finished: boolean;
}

interface IRequest {
  client_id: string;
  records: IClientRecord[];
}

@injectable()
export default class CreateClientRecordFeature {
  constructor(
    @inject('ClientRecordsRepository')
    private clientRecordsRepository: IClientRecordsRepository,
  ) {}

  public async execute({
    client_id,
    records,
  }: IRequest): Promise<ClientRecord[]> {
    const procedures = records.map(record => {
      return {
        client_id,
        ...record,
      };
    });

    const clientRecords = await this.clientRecordsRepository.createMany(
      procedures,
    );

    return clientRecords;
  }
}
