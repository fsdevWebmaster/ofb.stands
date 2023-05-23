import { Program, User } from "../interfaces";

export const users:User[] = [
  {
    email: "coord@mail.com",
    name: 'Marcela',
    idDoc: '95',
    role: 'coordinator',
    group: 'coord'
  },
  {
    email: "mail@mail.com",
    name: 'Camilo',
    idDoc: '91',
    role: 'chief',
    accumulated: 0,
    group: 'vc'
  },
  {
    email: "mail1@mail.com",
    name: 'Juanito',
    idDoc: '92',
    role: 'assistant',
    accumulated: 0,
    group: 'vc'
  },
  {
    email: "mail2@mail.com",
    name: 'Olga',
    idDoc: '93',
    role: 'tutti',
    accumulated: 0,
    group: 'vc'
  },
  {
    email: "mail3@mail.com",
    name: 'Jose',
    idDoc: '94',
    role: 'tutti',
    accumulated: 0,
    group: 'vc'
  }
]

export const programs:Program[] = [
  { 
    title: 'Mayo - Semana 1',
    dateEnd: new Date('2023-05-07'), 
    dateIni: new Date('2023-05-01'),
    pieces: [
      {title: 'Obertura', author: 'Bach', category: '1', musicians: []},
      {title: 'Concierto', author: 'Mozart', category: '1', musicians: []},
      {title: 'Sinfonía', author: 'Bach', category: '2', musicians: []}
    ]
  }
]