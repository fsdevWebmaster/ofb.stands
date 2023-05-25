import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard";
import { NewProgram } from "../pages/newProgram/newProgram";
import { Programs } from "../pages/programs";
import { ProgramPage } from "../pages/program";
import { AddPieceMusicians } from "../components/addPieceMusicians";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/new-program" element={ <NewProgram /> } />
      <Route path="/programs" element={ <Programs /> } />
      <Route path="/program/:id" element={ <ProgramPage /> } />
      <Route path="/piece-musicians/:programId/:pieceId" element={ <AddPieceMusicians /> } />
    </Routes>
  )
}
