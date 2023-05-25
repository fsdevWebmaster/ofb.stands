import { useContext, useState } from "react";

import { programs, users } from "../dummieData/dummieDb"
import { MusiciansNeeded, Piece, Program, Spot } from "../interfaces";
import { saveProgram } from "../services/app.service";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/app.context";
// import { groups } from '../config/app.config';

export const useOfb = () => {
  const navigate = useNavigate();
  const { addingProgram, setAddingProgram } = useContext(AppContext);
  const [addingPiece, setAddingPiece] = useState<Piece>({} as Piece);
  const [addingGroup, setAddingGroup] = useState<MusiciansNeeded>({} as MusiciansNeeded);

  const getUsers = () => {
    return users;
  }

  const getUserByName = (name:string) => {
    return users.find(item => item.name === name);
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
      piece.groups = [];
      setAddingPiece(piece);
  }

  const addPiece = () => {
    let program:Program = {...addingProgram};
    if (!program.pieces) {
      program.pieces = [];
    }
    setAddingPiece({...addingPiece, groups: []});
    program = {...program, pieces: [...program.pieces, addingPiece]}
    setAddingProgram(program);
  }

  const handleGroups = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddingGroup({...addingGroup, [name]:value});
  }

  const addMusicians = () => {
    const pieces = addingProgram?.pieces;
    if (pieces) {
      let piece = pieces?.find((item) => item.title === addingGroup.piece);
      if (piece) {
        piece = {...piece, groups: [...piece.groups, addingGroup]};
        const pieceIndex:any = addingProgram?.pieces?.findIndex(item => item.title === piece?.title);
        pieces[pieceIndex] = piece;
        setAddingProgram({...addingProgram, pieces});
      }
    }
  }

  const handleSpots = (programId:string, pieceId:string, spots:Spot[]) => {
    let program = getProgram(programId);
    let piece = getPiece(programId, pieceId);
    if (piece && program) {
      piece = {...piece, spots};
      const pIndex:any = program?.pieces?.findIndex(item => item.id === piece?.id);
      if (program && program.pieces) {
        const pieces:Piece[] = [...program.pieces];
        pieces[pIndex] = piece;
        program = {...program, pieces}
      }
      console.warn('TODO: save updated program:', program);
      navigate(`/program/${programId}`);
    }
    
  }

  const handleProgram = () => {
    if (addingProgram) {
      saveProgram(addingProgram);
      setAddingProgram(null);
      navigate('/dashboard');
    }
  }

  const getPrograms = () => {
    return programs;
  }

  const getProgram = (programId:string) => {
    return programs.find(item => item.id === programId);
  }

  const getPiece = (programId:string, pieceId:string) => {
    let piece;
    const program = programs.find(item => item.id === programId);
    if (program) {
      piece = program.pieces?.find(item => item.id === pieceId);
    }
    return piece;
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
    getPrograms,
    handleGroups,
    addMusicians,
    getProgram,
    getPiece,
    getUserByName,
    handleSpots
  }
}