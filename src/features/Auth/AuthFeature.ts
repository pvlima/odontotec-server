import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';
import IAuthDTO from './IAuthDTO';
import User from '../../database/entities/User';
import IUsersRepository from '../../repositories/IUsersRepository';
import AppError from '../../errors/AppError';
import IHashProvider from '../../providers/HashProvider/models/IHashProvider';

interface IResponse {
  token: string;
  user: User;
}

@injectable()
export default class AuthFeature {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IAuthDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination');
    }

    const checkPassword = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!checkPassword) {
      throw new AppError('Incorrect email/password combination');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        office_id: user.office_id,
      },
      secret,
      {
        subject: user.id,
        expiresIn,
      },
    );

    return { token, user };
  }
}
