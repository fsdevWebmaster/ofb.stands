import { useContext } from "react"
import { Link } from "react-router-dom";

import { AiFillPlusCircle } from 'react-icons/ai';

import { AppContext } from "../context/app.context"

export const AppNav = () => {
  const { logged } = useContext(AppContext);

  return (
    <nav className="main-nav">
      { logged && logged.role === 'coordinator' &&
        <>
          <Link to={'/new-program'} className="btn btn-sm btn-secondary">
            <AiFillPlusCircle className="btn-icon" />
            <span>Crear programa</span>
          </Link>
        </>
      }
      <Link to={'/programs'} className="btn btn-sm btn-secondary">
        Programas
      </Link>

    </nav>
  )
}
