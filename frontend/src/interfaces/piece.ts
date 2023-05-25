import { MusiciansNeeded, Spot } from ".";

export interface Piece {
  id?: string;
  title: string;
  author: string;
  category: string;
  groups: MusiciansNeeded[];
  spots?: Spot[];
}