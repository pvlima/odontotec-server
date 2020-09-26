import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export default [
  {
    name: 'updated_at',
    type: 'timestamp',
    default: 'now()',
  },
  {
    name: 'created_at',
    type: 'timestamp',
    default: 'now()',
  },
] as TableColumnOptions[];
