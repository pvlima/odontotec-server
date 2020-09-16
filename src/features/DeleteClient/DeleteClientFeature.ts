import { injectable, inject } from 'tsyringe';
import AppError from '../../errors/AppError';
import IClientsRepository from '../../repositories/IClientsRepository';

@injectable()
export default class DeleteClientFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async execute(id: string): Promise<boolean> {
    const deleted = await this.clientsRepository.deleteById(id);

    if (!deleted) {
      throw new AppError('client not found.', 404);
    }

    return deleted;
  }
}
