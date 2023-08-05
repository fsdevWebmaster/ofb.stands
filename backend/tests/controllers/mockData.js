import { register } from "../../controllers/app.controller"
import { jest } from "@jest/globals";

// null
// export const userData = null

// data incomplete
// export const userData = {
//   email: 'mail@mail.com',
//   password: '10',
//   name: 'Fidel'
// }

// data complete
export const userData = {
  email: 'mail@mail.com',
  password: '10',
  name: 'Fidel',
  idDoc: '91',
  group: 'admin',
  role: 'webmaster',
  accumulated: 0
}

export const mockReq = () => {
  let req = {}
  req.body = userData
  return req;
}

export const mockRes = () => {
  let res = {
    json: jest.fn().mockReturnValue(userData)
  };
  return res;
}

export const loginReq = () => {
  let req = {}
  req.body = loginData
  return req;
}

// const token = null
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

export const loginRes = () => {
  let res = {}
  if (!token) {
    throw new Error('missing-token')
  }
  
  res.json = jest.fn().mockReturnValue(token)
  return res;
}

// null data
// const loginData = null

// incomplete data
// const loginData = { 
//   email: 'mail@mail.com',
// }

// complete data
const loginData = { 
  email: 'mail@mail.com', 
  password: '1234' 
}

