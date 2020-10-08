import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { id, timestamps } from '../utils';

export default class CreateClientRecords1601646642074
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'client_records',
        columns: [
          id,
          {
            name: 'procedure',
            type: 'varchar',
          },
          {
            name: 'is_finished',
            type: 'boolean',
            default: false,
          },
          ...timestamps,
          {
            name: 'client_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'client_records_client_id_fkey',
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
    await queryRunner.dropTable('client_records');
  }
}
