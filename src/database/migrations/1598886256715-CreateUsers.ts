import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { id, timestamps } from '../utils';

export default class CreateUsers1598886256715 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          id,
          {
            name: 'type',
            type: 'enum',
            enumName: 'users_type_enum',
            enum: ['super', 'dentist', 'clerk'],
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          ...timestamps,
          {
            name: 'office_id',
            type: 'uuid',
          },
        ],
        indices: [
          {
            name: 'users_name_idx',
            columnNames: ['name'],
          },
          {
            name: 'users_email_uidx',
            columnNames: ['email'],
            isUnique: true,
          },
        ],
        foreignKeys: [
          {
            name: 'users_office_id_fkey',
            columnNames: ['office_id'],
            referencedTableName: 'offices',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
