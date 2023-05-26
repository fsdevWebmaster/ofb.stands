import { useContext } from "react"
import { Link } from "react-router-dom";

import { AiFillPlusCircle } from 'react-icons/ai';

import { AppContext } from "../context/app.context"

export const AppNav = () => {
  const { logged } = useContext(AppContext);

  return (
    <nav className="main-nav">
      <AiFillPlusCircle />
      { logged && logged.role === 'coordinator' &&
        <Link to={'/new-program'} className="btn btn-sm btn-secondary">
          Crear programa
        </Link>
      }
      <Link to={'/programs'} className="btn btn-sm btn-secondary">
        Programas
      </Link>

    </nav>
  )
}
