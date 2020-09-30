import { injectable, inject } from 'tsyringe';
import Schedule from '../../database/entities/Schedule';
import ISchedulesRepository from '../../repositories/ISchedulesRepository';

interface IRequest {
  user_id: string;
  date: Date;
  time: string;
  client_id: string;
  office_id: string;
  procedure?: string;
}

@injectable()
export default class CreateScheduleFeature {
  constructor(
    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository,
  ) {}

  public async execute({
    user_id,
    client_id,
    office_id,
    date,
    time,
    procedure,
  }: IRequest): Promise<Schedule> {
    const formattedDate = new Date(date);
    const [hour, minutes] = time.split(':');
    formattedDate.setHours(Number(hour) + 3, Number(minutes));

    const schedules = await this.schedulesRepository.create({
      user_id,
      client_id,
      office_id,
      date: formattedDate,
      procedure,
    });

    return schedules;
  }
}
