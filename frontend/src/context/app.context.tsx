import { createContext } from "react";
import { Program, User } from "../interfaces";

export interface IContext {
  setLogged: (user:User) => void;
  logged:User | null;
  addingProgram:Program | null;
  setAddingProgram: (program:Program | null) => void;
}

export const AppContext = createContext({} as IContext);