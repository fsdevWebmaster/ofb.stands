import { User } from ".";

export interface Piece {
  id?: string;
  title: string;
  author: string;
  category: string;
  musicians: User[];
}