import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Client from './Client';
import User from './User';

@Entity('schedules')
export default class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp')
  date: Date;

  @Column('varchar', { nullable: true })
  procedure: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @Column('uuid')
  office_id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  client_id: string;

  @ManyToOne(() => User, user => user.schedules)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Client, client => client.schedules)
  @JoinColumn({ name: 'client_id' })
  client: Client;
}
