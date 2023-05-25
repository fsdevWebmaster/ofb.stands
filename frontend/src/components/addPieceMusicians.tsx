import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Piece, Program, Spot, User } from "../interfaces";
import { useOfb } from "../hooks/useOfb";
import { AppContext } from "../context/app.context";
import { MusiciansSelector } from "./musiciansSelector";

export const AddPieceMusicians = () => {
  const { logged } = useContext(AppContext);
  const { getProgram, getPiece, getGroup, handleSpots } = useOfb();
  const location = useLocation();
  const [program, setProgram] = useState<Program>();
  const [piece, setPiece] = useState<Piece>();
  const [group, setGroup] = useState<User[]>([]);
  const [spots, setSpots] = useState<Spot[]>([]);

  const handleMusicians = (selected:User, i:number) => {
    let spot:Spot = spots[i];
    spot = {...spot, musician: selected};
    const spotsClone = [...spots];
    spotsClone[i] = spot;
    setSpots(spotsClone);
  }

  useEffect(() => {
    const pathArr = location.pathname.split('/');
    const programId = pathArr[2];
    const pieceId = pathArr[3];
    const program = getProgram(programId);
    if (program) {
      const piece = getPiece(programId, pieceId);
      setProgram(program);
      setPiece(piece);
      if (logged) {
        const group = getGroup(logged?.group)
        setGroup(group);
        if (group) {
          const pieceGroup = piece?.groups.find(item => item.group === logged.group);
          if (pieceGroup) {
            const spotsArr = Array(pieceGroup.quant);
            for (let i = 0; i < spotsArr.length; i++) {
              spotsArr[i] = { position: i + 1 };
            }
            setSpots(spotsArr);
          }
        }
      }
    }
  }, []);
  

  return (
    <div className="container">
      <p>Add piece musicians</p>
      <h2>{ program?.title }</h2>
      <h1>{ piece?.title } - { piece?.author }</h1>
      { spots.map((spt, i) => (
        <div key={i} className="stand-container">
          <span>{i + 1}</span>
          <MusiciansSelector 
            key={i}
            listItems={group} 
            setSelected={ selected => handleMusicians(selected, i) } 
          />
        </div>
      ))}
      { program && program.id && piece && piece.id &&
        <button onClick={ () => handleSpots(program.id!, piece.id!, spots) }
          className="btn btn-sm btn-secondary mt-2">
          Guardar
        </button>
      }

    </div>
  )
}