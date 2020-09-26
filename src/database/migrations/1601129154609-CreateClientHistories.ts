import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { id, timestamps } from '../utils';

export default class CreateClientHistories1601129154609
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'client_histories',
        columns: [
          id,
          {
            name: 'reason',
            type: 'varchar',
            comment: 'Motivo pelo qual procurou atendimento',
            isNullable: true,
          },
          {
            name: 'has_disease',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'disease',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_treatment',
            type: 'boolean',
            isNullable: true,
            comment: 'Está sob tratamento médico atualmente?',
          },
          {
            name: 'treatment',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'use_medicament',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'medicament',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_pregnant',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'is_brestfeeding',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'use_contraceptives',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_allergy',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'allergy',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'had_surgery',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'surgery',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'had_healing_problem',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'had_bleeding',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'last_medical_appointment',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'appointment_reason',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'has_hereditary_health_issues',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'hereditary_health_issues',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'has_diabetes',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_hypertension',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_hepatitis',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_asthma',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_stroke',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_anemia',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_hemophilia',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_tuberculosis',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_aids',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_epilepsy',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_leukemia',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_rheumatic_fever',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_arthritis',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_gastritis',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_ulcer',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_leprosy',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_nephropathy',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_cancer',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_std',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'has_herpes',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'is_smoker',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'is_drug_addict',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'is_obese',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'client_behavior',
            type: 'enum',
            enumName: 'client_histories_client_behavior_enum',
            enum: ['calm', 'anxious', 'fearful'],
            isNullable: true,
          },
          {
            name: 'other_information',
            type: 'varchar',
            isNullable: true,
          },
          ...timestamps,
          {
            name: 'client_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'client_histories_client_id_fkey',
            columnNames: ['client_id'],
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('client_histories');
  }
}
