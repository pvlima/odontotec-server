import { injectable, inject } from 'tsyringe';
import AppError from '../../errors/AppError';
import ISchedulesRepository from '../../repositories/ISchedulesRepository';

@injectable()
export default class DeleteScheduleFeature {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository,
  ) {}

  public async execute(id: string): Promise<boolean> {
    const deleted = await this.schedulesRepository.deleteById(id);

    if (!deleted) {
      throw new AppError('schedule not found.', 404);
    }

    return deleted;
  }
}
