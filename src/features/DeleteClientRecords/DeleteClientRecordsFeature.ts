import { injectable, inject } from 'tsyringe';
import IClientRecordsRepository from '../../repositories/IClientRecordsRepository';

@injectable()
export default class DeleteClientRecordsFeature {
  constructor(
    @inject('ClientRecordsRepository')
    private clientRecordsRepository: IClientRecordsRepository,
  ) {}

  public async execute(client_id: string): Promise<boolean> {
    const deleted = await this.clientRecordsRepository.deleteAllByClientId(
      client_id,
    );

    return deleted;
  }
}
