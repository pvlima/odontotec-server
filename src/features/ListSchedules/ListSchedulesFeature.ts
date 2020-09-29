import { injectable, inject } from 'tsyringe';
import Schedule from '../../database/entities/Schedule';
import ISchedulesRepository from '../../repositories/ISchedulesRepository';

interface IRequest {
  office_id: string;
  date?: Date;
}

@injectable()
export default class ListSchedulesFeature {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository,
  ) {}

  public async execute({ office_id, date }: IRequest): Promise<Schedule[]> {
    const schedules = await this.schedulesRepository.findAllByOfficeIdAndDate(
      office_id,
      date,
    );
    return schedules;
  }
}
