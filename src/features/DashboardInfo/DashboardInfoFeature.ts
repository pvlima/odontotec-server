import { injectable, inject } from 'tsyringe';
import IClientsRepository from '../../repositories/IClientsRepository';
import IUsersRepository from '../../repositories/IUsersRepository';
import ISchedulesRepository from '../../repositories/ISchedulesRepository';

interface CountSchedules {
  id: string;
  dentistName: string;
  countSchedules: number;
}

interface IResponse {
  countClients: number;
  schedules: CountSchedules[];
}

@injectable()
export default class DashboardInfoFeature {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('SchedulesRepository')
    private schedulesRepository: ISchedulesRepository,
  ) {}

  public async execute(): Promise<IResponse> {
    const countClients = await this.clientsRepository.count();
    const dentists = await this.usersRepository.findByType('dentist');
    const schedules: CountSchedules[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const dentist of dentists) {
      // eslint-disable-next-line no-await-in-loop
      const countSchedules = await this.schedulesRepository.countByUserId(
        dentist.id,
      );
      schedules.push({
        id: dentist.id,
        dentistName: dentist.name,
        countSchedules,
      });
    }

    return {
      countClients,
      schedules,
    };
  }
}
