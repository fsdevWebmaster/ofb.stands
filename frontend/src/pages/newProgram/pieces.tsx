import { AiOutlineArrowRight } from "react-icons/ai";
import { pieceCategories } from "../../config/app.config";
import { useOfb } from "../../hooks/useOfb"

interface Props {
  continueCreation: (step: number) => void;
}

export const Pieces = ({ continueCreation }:Props) => {

  const { handleAddingPiece, addPiece } = useOfb();

  return (
    <div className="container">
      <h2 className="mt-5">Piezas</h2>
      <label htmlFor="title">
        <span>Título pieza</span>
        <input 
          name="title"
          type="text" 
          className="form-control" 
          onBlur={ e => handleAddingPiece(e) }
        />
      </label>
      <label htmlFor="author">
        <span>Autor</span>
        <input 
          name="author"
          type="text" 
          className="form-control" 
          onBlur={ e => handleAddingPiece(e) }
        />
      </label>
      <label htmlFor="category">
        <span>Tipo de pieza</span>
        <select 
          name="category"
          className="form-control"
          onChange={ e => handleAddingPiece(e) }
        >
          <option value="">Tipo de pieza</option>
          { pieceCategories.map(pc => (
            <option key={ pc.title } value={ pc.value }>{ pc.title }</option>
          ))}
        </select>
      </label>

      <button 
        onClick={ addPiece }
        className="btn btn-sm btn-secondary">
        <span>Agregar pieza</span>
      </button>

      <button onClick={ steps => continueCreation(2) }
        className="btn btn-sm btn-secondary">
        <span>Continuar</span>
        <AiOutlineArrowRight className="btn-icon right" />
      </button>
    </div>
  )
}