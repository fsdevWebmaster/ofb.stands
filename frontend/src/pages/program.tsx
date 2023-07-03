import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";

import { Program } from "../interfaces";
import { programs } from "../dummieData/dummieDb";
import { AppContext } from "../context/app.context";


export const ProgramPage = () => {
  const { logged } = useContext(AppContext);
  const location = useLocation();
  const [program, setProgram] = useState<Program |  null>();

  useEffect(() => {
    const programId = location.pathname.split('/')[2];
    const program = programs.find(item => item.id === programId);
    setProgram(program);
  }, []);
  

  return (
    <div className="container">
      <p>Program</p>
      <Link to={'/programs'} className="btn btn-sm btn-secondary">
        Programas
      </Link>
      { program && 
        <>
          <h1>{ program.title }</h1>
          <h2>{ program.dateIni?.toDateString() } al { program.dateEnd?.toDateString() }</h2>
          { program.pieces && program.pieces.map(piece => {
            const group = piece.groups.find(g => g.group === logged?.group);
            return (
              <div key={piece.title} className="piece-container">
                <h3>{ piece.title }</h3>
                <h4>{ group?.group } { group?.quant }</h4>
                { piece.spots && piece.spots.map(spot => (
                  <div key={spot.position}>
                    <p>{ spot.musician?.name }</p>
                  </div>
                ))}
                <Link to={`/piece-musicians/${program.id}/${piece.id}`} className="btn btn-sm btn-secondary">
                  Agregar músicos
                </Link>
              </div>
            )
          })}
        </>
      }
    </div>
  )
}