export default interface ICreateClientDTO {
  name: string;
  alias?: string;
  email?: string;
  phone: string;
  rg?: string;
  cpf?: number;
  birth?: Date;
  address?: string;
  city?: string;
  general_info?: string;
  office_id: string;
}
