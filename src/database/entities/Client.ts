import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clients')
export default class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  alias: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  rg: string;

  @Column('int')
  cpf: number;

  @Column('date')
  birth: Date;

  @Column()
  address: string;

  @Column()
  city: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
}
