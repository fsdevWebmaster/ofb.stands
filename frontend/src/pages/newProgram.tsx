import { pieceCategories } from "../config/app.config";
import { useOfb } from "../hooks/useOfb"

export const NewProgram = () => {
  const { handleNewProgram, addingProgram, handleAddingPiece, 
    addPiece, handleProgram } = useOfb();

  return (
    <div className="page-container">
      <div>NewProgram</div>
      <div className="program-preview">
        { addingProgram &&
          <h1>{ addingProgram.title }</h1>
        }
      </div>

      <label htmlFor="title">
        <span>Título programa</span>
        <input 
          name="title"
          type="text"
          className="form-control" 
          onBlur={ e => handleNewProgram(e) }
        />
      </label>
      <label htmlFor="dateIni">
        <span>Fecha inicial</span>
        <input 
          name="dateIni"
          type="date"
          className="form-control" 
          onBlur={ e => handleNewProgram(e) }
        />
      </label>
      <label htmlFor="dateEnd">
        <span>Fecha final</span>
        <input 
          name="dateEnd"
          type="date"
          className="form-control" 
          onBlur={ e => handleNewProgram(e) }
        />
      </label>
      <div className="clear"></div>

      <label htmlFor="pieceTitle">
        <span>Título pieza</span>
        <input 
          name="pieceTitle"
          type="text" 
          className="form-control" 
          onBlur={ e => handleAddingPiece(e) }
        />
      </label>
      <label htmlFor="pieceAuthor">
        <span>Autor</span>
        <input 
          name="pieceAuthor"
          type="text" 
          className="form-control" 
          onBlur={ e => handleAddingPiece(e) }
        />
      </label>
      <label htmlFor="pieceCategory">
        <span>Tipo de pieza</span>
        <select 
          name="pieceCategory"
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
        Agregar pieza
      </button>

      <button 
        onClick={ handleProgram }
        className="btn btn-sm btn-secondary">
        Guardar programa
      </button>
    </div>
  )
}
