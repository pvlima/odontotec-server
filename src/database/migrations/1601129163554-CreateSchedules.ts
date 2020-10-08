import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { id, timestamps } from '../utils';

export default class CreateSchedules1601129163554
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'schedules',
        columns: [
          id,
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'procedure',
            type: 'varchar',
            isNullable: true,
          },
          ...timestamps,
          {
            name: 'office_id',
            type: 'uuid',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'client_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'schedules_office_id_fkey',
            columnNames: ['office_id'],
            referencedTableName: 'offices',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'schedules_user_id_fkey',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'schedules_client_id_fkey',
            columnNames: ['client_id'],
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('schedules');
  }
}
