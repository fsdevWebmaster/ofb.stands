import { useContext, useState } from "react";
import { useOfb } from "../../hooks/useOfb"
import { Groups } from "./groups";
import { NewProgramInfo } from "./newProgramInfo";
import { AppContext } from "../../context/app.context";
import { Piece } from "../../interfaces";
import { Pieces } from "./pieces";

export const NewProgram = () => {
  const { addingProgram } = useContext(AppContext);
  const { handleProgram } = useOfb();
  
  const [steps, setSteps] = useState(0);

  const handleSteps = (step:number) => {
    setSteps(step);
  }

  return (
    <div className="page-container">
      <div>NewProgram</div>
      <div className="program-preview">
        { addingProgram && 
          <>
            <h1>{ addingProgram.title }</h1>
            <h2>
              { addingProgram.dateIni?.toString() } al { addingProgram.dateEnd?.toString() }
            </h2>
            <h3>Repertorio</h3>
            { addingProgram.pieces?.map((piece:Piece, i:number) => (
              <>
                <div key={i} className="app-row">
                  <p>{ piece.title } - { piece.author }</p>
                </div>
                { piece.groups.map((group, j) => (
                  <p key={`${group}_${i}_${j}`}>{ group.group } - { group.quant }</p>
                ))}
              </>
            ))}
          </>
        }
      </div>
      { steps === 0 &&
        <NewProgramInfo continueCreation={ step => handleSteps(step) } />
      }
      { steps === 1 && 
        <Pieces continueCreation={ step => handleSteps(step) } />
      }
      { steps === 2 && 
        <Groups continueCreation={ step => handleSteps(step) } />
      }
      { steps === 3 &&
        <button onClick={ handleProgram } className="btn btn-sm btn-secondary">
          Guardar programa
        </button>
      }
    </div>
  )
}
