import { backendUrl } from "../config/app.config";
import { Program, User } from "../interfaces";

export const userRegister = async (data:User) => {
  const resp = await fetch(`${backendUrl}/api/register`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify(data)
  });
  const respData = await resp.json();
  return respData;
}

export const userLogin = async (data:{email: string, password: string}) => {
  const resp = await fetch(`${backendUrl}/api/login`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify(data)    
  });
  const respData = await resp.json();
  return respData;
}

export const saveProgram = (program:Program) => {

  console.log('saving program', program);

}


export const getUsersList = async (logged:User) => {
  const resp = await fetch(`${backendUrl}/api/users`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify(logged)
  });
  
  
  const respData = await resp.json();
  
  console.log(respData);
}