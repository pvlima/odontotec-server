import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { id, timestamps } from '../utils';

export default class CreateOffices1597127119808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'offices',
        columns: [
          id,
          {
            name: 'name',
            type: 'varchar',
          },
          ...timestamps,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('offices');
  }
}
