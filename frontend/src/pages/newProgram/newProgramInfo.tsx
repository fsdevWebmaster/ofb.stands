import { AiOutlineArrowRight } from "react-icons/ai";
import { useOfb } from "../../hooks/useOfb"

interface Props {
  continueCreation: (step: number) => void;
}

export const NewProgramInfo = ({ continueCreation }:Props) => {
  const { handleNewProgram } = useOfb();

  return (
    <div className="container px-0">
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

      <button onClick={ step => continueCreation(1) }
        className="btn btn-sm btn-secondary mt-2">
        <span>Continuar</span>
        <AiOutlineArrowRight className="btn-icon right" />
      </button>
    </div>
  )
}
