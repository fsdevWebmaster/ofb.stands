import { useState } from "react"
import { AppContext } from "./app.context"
import { User } from "../interfaces";

export const AppProvider = ({ children }) => {
  const [logged, setLogged] = useState<User | null>(null);


  return (
    <AppContext.Provider value={{ logged, setLogged }}>
      { children }
    </AppContext.Provider>
  )
}
