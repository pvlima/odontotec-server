import User from '../database/entities/User';

export default interface IUsersRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findByType(type: 'super' | 'dentist' | 'clerk'): Promise<User[]>;
  save(data: User): Promise<User>;
}
