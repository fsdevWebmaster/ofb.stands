import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard";
import { NewProgram } from "../pages/newProgram";
import { Programs } from "../pages/programs";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/new-program" element={ <NewProgram /> } />
      <Route path="/programs" element={ <Programs /> } />
    </Routes>
  )
}
