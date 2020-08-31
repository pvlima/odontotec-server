import { injectable, inject } from 'tsyringe';
import User from '../../database/entities/User';
import IUsersRepository from '../../repositories/IUsersRepository';

@injectable()
export default class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const users = this.usersRepository.findAll();
    return users;
  }
}
