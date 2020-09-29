import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { id, timestamps } from '../utils';

export default class CreateClients1599223647817 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          id,
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'alias',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'rg',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '14',
            isNullable: true,
          },
          {
            name: 'gender',
            type: 'enum',
            enumName: 'clients_gender_enum',
            enum: ['M', 'F'],
            isNullable: true,
          },
          {
            name: 'birth',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: true,
          },
          ...timestamps,
          {
            name: 'office_id',
            type: 'uuid',
          },
        ],
        indices: [
          {
            name: 'clients_name_idx',
            columnNames: ['name'],
          },
          {
            name: 'clients_email_uidx',
            columnNames: ['email'],
            isUnique: true,
          },
          {
            name: 'clients_phone_uidx',
            columnNames: ['phone'],
            isUnique: true,
          },
          {
            name: 'clients_rg_uidx',
            columnNames: ['rg'],
            isUnique: true,
          },
          {
            name: 'clients_cpf_uidx',
            columnNames: ['cpf'],
            isUnique: true,
          },
        ],
        foreignKeys: [
          {
            name: 'clients_office_id_fkey',
            columnNames: ['office_id'],
            referencedTableName: 'offices',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}
