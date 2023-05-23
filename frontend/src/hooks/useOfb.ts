import { useState } from "react";

import { programs, users } from "../dummieData/dummieDb"
import { Piece, Program } from "../interfaces";
import { saveProgram } from "../services/app.service";

export const useOfb = () => {
  const [addingProgram, setAddingProgram] = useState<Program>({} as Program);
  const [addingPiece, setAddingPiece] = useState<Piece>({} as Piece);

  const getUsers = () => {
    return users;
  }

  const getGroup = (groupId:string) => {
    const group = users.filter(user => user.group === groupId);
    return group;
  }

  const handleNewProgram = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let program = {...addingProgram};
    program = { ...program, [name]: value };
    setAddingProgram(program);
  }

  const handleAddingPiece = (e:React.ChangeEvent<HTMLSelectElement> | 
    React.FocusEvent<HTMLInputElement, Element>) => {
      const { name, value } = e.target;
      let piece:Piece = {...addingPiece};
      piece = {...addingPiece, [name]: value};
      setAddingPiece(piece);
  }

  const addPiece = () => {
    let program:Program = {...addingProgram};
    if (!program.pieces) {
      program.pieces = [];      
    }
    program = {...program, pieces: [...program.pieces, addingPiece]}
    setAddingProgram(program);
  }

  const handleProgram = () => {
    saveProgram(addingProgram);
  }

  const getPrograms = () => {
    return programs;
  }



  return {
    getUsers,
    getGroup,
    handleNewProgram,
    addingProgram,
    addingPiece,
    handleAddingPiece,
    addPiece,
    handleProgram,
    getPrograms
  }
}