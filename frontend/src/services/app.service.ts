import { backendUrl } from "../config/app.config";
import { Program, User } from "../interfaces";

export const userRegister = async (data:User) => {
  const resp = await fetch(`${backendUrl}/api/register`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify(data)
  });


  console.log(resp);
  console.log(data);

}

export const saveProgram = (program:Program) => {

  console.log('saving program', program);

}