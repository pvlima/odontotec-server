import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export default {
  name: 'id',
  type: 'uuid',
  isPrimary: true,
  generationStrategy: 'uuid',
  default: 'uuid_generate_v4()',
} as TableColumnOptions;
