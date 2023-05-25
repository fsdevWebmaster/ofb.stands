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
    id: 'pms1',
    title: 'Mayo - Semana 1',
    dateEnd: new Date('2023-05-07'), 
    dateIni: new Date('2023-05-01'),
    pieces: [
      {
        id: 'p1',
        title: 'Obertura', 
        author: 'Bach', 
        category: '1', 
        groups: [
          {group: 'vla', quant: 8},
          {group: 'vc', quant: 4}
        ],
        spots: [
          { position: 1,  
            musician: {
              email: "mail@mail.com",
              name: 'Camilo',
              idDoc: '91',
              role: 'chief',
              accumulated: 0,
              group: 'vc'
            }
          },
          { position: 2,  
            musician: {
              email: "mail1@mail.com",
              name: 'Juanito',
              idDoc: '92',
              role: 'assistant',
              accumulated: 0,
              group: 'vc'
            }
          },
          { position: 3,  
            musician: {
              email: "mail2@mail.com",
              name: 'Olga',
              idDoc: '93',
              role: 'tutti',
              accumulated: 0,
              group: 'vc'
            }
          },
          { position: 4,  
            musician: {
              email: "mail3@mail.com",
              name: 'Jose',
              idDoc: '94',
              role: 'tutti',
              accumulated: 0,
              group: 'vc'
            }
          }
        ]
      },
      {
        id: 'p2',
        title: 'Concierto', 
        author: 'Mozart', 
        category: '1', 
        groups: [
          {group: 'vla', quant: 10},
          {group: 'vc', quant: 6}


        ]
      },
      {
        id: 'p3',
        title: 'Sinfonía', 
        author: 'Bach', 
        category: '2', 
        groups: [
          {group: 'vla', quant: 12},
          {group: 'vc', quant: 8}
        ]
      }
    ]
  }
]
