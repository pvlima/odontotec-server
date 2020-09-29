declare namespace Express {
  export interface Request {
    user: {
      id: string;
      office_id: string;
    };
  }
}
