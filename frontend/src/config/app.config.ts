import { Group, PieceCategory, Role } from "../interfaces";

export const groups:Group[] = [
  { id: 'vl1', name: 'Violines I' },
  { id: 'vl2', name: 'Violines II' },
  { id: 'vla', name: 'Violas' },
  { id: 'vc', name: 'Violonchelos' },
  { id: 'cba', name: 'Contrabajos' }
]

export const roles:Role[] = [
  { name: 'webmaster', title: 'Webmaster' },
  { name: 'coordinator', title: 'Coordinador' },
  { name: 'chief', title: 'Jefe de grupo' },
  { name: 'assistant', title: 'Asistente de grupo' },
  { name: 'tutti', title: 'Tutti' }
]

export const backendUrl = 'http://localhost:8000';

export const pieceCategories:PieceCategory[] = [
  { title: 'Obertura', value: 1 },
  { title: 'Concierto', value: 1 },
  { title: 'Sinfonía', value: 2 },
  { title: 'Programa completo', value: 5 }
];