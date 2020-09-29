import { getRepository, Repository } from 'typeorm';

import Schedule from '../entities/Schedule';
import ICreateScheduleDTO from '../../features/CreateSchedule/ICreateScheduleDTO';

export default class SchedulesRepository {
  private ormRepository: Repository<Schedule>;

  constructor() {
    this.ormRepository = getRepository(Schedule);
  }

  public async findAll(): Promise<Schedule[]> {
    const schedules = await this.ormRepository.find();
    return schedules;
  }

  public async findAllByOfficeId(office_id: string): Promise<Schedule[]> {
    const schedules = await this.ormRepository.find({ where: { office_id } });
    return schedules;
  }

  public async findAllByUserId(user_id: string): Promise<Schedule[]> {
    const schedules = await this.ormRepository.find({ where: { user_id } });
    return schedules;
  }

  public async findAllByClientId(client_id: string): Promise<Schedule[]> {
    const schedules = await this.ormRepository.find({ where: { client_id } });
    return schedules;
  }

  public async findById(id: string): Promise<Schedule | undefined> {
    const schedule = await this.ormRepository.findOne({ where: { id } });
    return schedule;
  }

  public async create(data: ICreateScheduleDTO): Promise<Schedule> {
    const schedule = this.ormRepository.create(data);
    await this.ormRepository.save(schedule);

    return schedule;
  }

  public async save(data: Schedule): Promise<Schedule> {
    const schedule = await this.ormRepository.save(data);
    return schedule;
  }

  public async deleteById(id: string): Promise<boolean> {
    const deleted = await this.ormRepository.delete({ id });
    return !!deleted.affected;
  }
}
