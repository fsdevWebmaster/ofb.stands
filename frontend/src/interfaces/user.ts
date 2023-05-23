
export interface User {
  email: string;
  password?:string,
  name: string;
  idDoc: string;
  group: string;
  role: string;
  accumulated?: number
}