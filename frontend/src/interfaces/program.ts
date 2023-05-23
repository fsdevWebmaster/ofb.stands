import { Piece } from ".";

export interface Program {
  id?: string;
  title?: string;
  dateIni?: Date;
  dateEnd?: Date;
  pieces?: Piece[];
}