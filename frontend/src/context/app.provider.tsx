import { useState } from "react"
import { AppContext } from "./app.context"
import { Program, User } from "../interfaces";

export const AppProvider = ({ children }) => {
  const [logged, setLogged] = useState<User | null>(null);
  const [addingProgram, setAddingProgram] = useState<Program | null>(null);

  return (
    <AppContext.Provider value={{ 
      logged, setLogged, addingProgram, setAddingProgram 
    }}>
      { children }
    </AppContext.Provider>
  )
}
