import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { groups } from "../../config/app.config"
import { useOfb } from "../../hooks/useOfb"

interface Props {
  continueCreation: (step: number) => void;
}

export const Groups = ({ continueCreation }:Props) => {
  const { addingProgram } = useContext(AppContext);
  const { handleGroups, addMusicians } = useOfb();

  return (
    <>
      <h2 className="mt-5">Grupos</h2>

      <select name="piece" onChange={ e => handleGroups(e) } className="form-control">
        <option value="">Seleccione pieza</option>
        { addingProgram?.pieces?.map(pieceItem => (
          <option key={pieceItem.title} value={pieceItem.title}>
            { pieceItem.title } - { pieceItem.author }
          </option>
        )) }
      </select>

      <label htmlFor="group">
        <select name="group" className="form-control" onChange={ e => handleGroups(e) }>
          <option value="">Seleccione grupo</option>
          { groups.map(group => (
            <option key={group.id} value={group.id}>
              { group.name }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="quant">
        <input type="number" name="quant" className="form-control" onBlur={ e => handleGroups(e) } />
      </label>
      <button onClick={ addMusicians } className="btn btn-sm btn-secondary mt-2">
        Agregar grupo
      </button>
      <button onClick={ steps => continueCreation(3) }
        className="btn btn-sm btn-secondary">
        Continuar
      </button>
    </>
  )
}