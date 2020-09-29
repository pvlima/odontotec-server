import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Schedule from './Schedule';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum')
  type: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @Column('uuid')
  office_id: string;

  @OneToMany(() => Schedule, schedule => schedule.user)
  schedules: Schedule[];
}
