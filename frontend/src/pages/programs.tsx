import { useEffect, useState } from "react";

import { useOfb } from "../hooks/useOfb"
import { Program } from "../interfaces";
import { Link } from "react-router-dom";

export const Programs = () => {
  const { getPrograms } = useOfb();
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const programs = getPrograms();
    setPrograms(programs);
  }, []);
  

  return (
    <>
    <div className="container">
      <div>Programs</div>
      <div className="app-list">
        { programs.map(program => (
          <div key={ program.title } className="list-row py-3">
            <p>{ program.title }</p>
            <Link to={`/program/${program.id}`} className="btn btn-sm btn-secondary">
              Ver más
            </Link>
          </div>
        )) }
      </div>
      <p className="alert alert-info mt-5">
        Musics list ordered by accumulated desc.
      </p>
    </div>
    </>
  )
}
