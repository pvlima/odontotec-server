export default interface ICreateScheduleDTO {
  user_id: string;
  date: Date;
  client_id: string;
  office_id: string;
  procedure?: string;
}
