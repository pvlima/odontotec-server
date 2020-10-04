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

@Entity('client_records')
export default class ClientRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  procedure: string;

  @Column('boolean')
  is_finished: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @Column('uuid')
  client_id: string;

  @ManyToOne(() => Client, client => client.records)
  @JoinColumn({ name: 'client_id' })
  client: Client;
}
