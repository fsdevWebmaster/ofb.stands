import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/app.context";
import { Login, User } from "../interfaces";
import { userLogin, userRegister } from "../services/app.service";
// import { users } from "../dummieData/dummieDb";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setLogged } = useContext(AppContext);
  const [error, setError] = useState<string>();

  const handleRegister = async (e:React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const { email, password, name, idDoc, group, role, regCode } = e.target;
    const data:User = { 
      email: email.value, 
      password: password.value, 
      name: name.value, 
      idDoc: idDoc.value, 
      group: group.value, 
      role: role.value,
      accumulated: 0,
      registerCode: regCode.value
    };
    const valid = validateForms(data);
    if (!valid) {
      setError('Todos los datos son obligatorios.');
    }
    const regData = await userRegister(data);
    
    console.log(regData);

  }

  const login = (e:React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const { email, password } = e.target;
    const data = {
      email: email.value,
      password: password.value
    }
    const valid = validateForms(data);
    if (valid) {
      
      userLogin(data)
    
    }
    else {
      setError('Todos los datos son obligatorios.');
    }
  }

  const validateForms = (data:Login | any) => {
    let valid = true;
    const keys = Object.keys(data);
    keys.forEach(item => {
      if(data[item] === '') {
        valid = false;
      }      
    });
    return valid;
  }

  return {
    handleRegister,
    error,
    login
  }
}