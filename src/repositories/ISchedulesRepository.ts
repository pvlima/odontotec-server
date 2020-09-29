import Schedule from '../database/entities/Schedule';
import ICreateScheduleDTO from '../features/CreateSchedule/ICreateScheduleDTO';

export default interface ISchedulesRepository {
  findAll(): Promise<Schedule[]>;
  findAllByOfficeId(office_id: string): Promise<Schedule[]>;
  findAllByOfficeIdAndDate(office_id: string, date?: Date): Promise<Schedule[]>;
  findAllByUserId(user_id: string): Promise<Schedule[]>;
  findAllByClientId(client_id: string): Promise<Schedule[]>;
  findById(id: string): Promise<Schedule | undefined>;
  create(data: ICreateScheduleDTO): Promise<Schedule>;
  save(data: Schedule): Promise<Schedule>;
  deleteById(id: string): Promise<boolean>;
}
