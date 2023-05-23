import { useEffect, useState } from "react";

import { useOfb } from "../hooks/useOfb"
import { Program } from "../interfaces";

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
          <div key={ program.title } className="list-row">
            { program.title }
          </div>
        )) }
      </div>
      <p className="alert alert-info">
        Musics list ordered by accumulated desc.
      </p>
    </div>
    </>
  )
}
