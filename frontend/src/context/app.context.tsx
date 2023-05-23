import { createContext } from "react";
import { User } from "../interfaces";

interface Tal {
  setLogged: (user:User) => void;
  logged:User | null;
}

export const AppContext = createContext({} as Tal);