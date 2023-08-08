import { jest } from "@jest/globals";
import * as appController from  "./../../controllers/app.controller";
import { mockRes, mockReq, loginReq, loginRes } from "./mockData";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;

describe('USER REGISTER TESTS', () => {
  const controller = {...appController};
  const registerMock = jest.spyOn(controller, "register");
  const response = registerMock(mockReq(), mockRes().json())
  
  test('Registration data should be valid.', () => {
    const { body } = mockReq()
    expect(body).toBeTruthy()
    expect(body).toMatchObject({
      email: expect.stringMatching(emailRegex),
      password: expect.any(String),
      name: expect.any(String),
      idDoc: expect.any(String),
      group: expect.any(String), // options from list?
      role: expect.any(String), // options from list?
      accumulated: expect.any(Number)
    })
  })

  test('Should return the registered user', () => {
    // response exist
    expect(response).toBeTruthy()
    // is user
    expect(response).toMatchObject({
      email: expect.stringMatching(emailRegex),
      password: expect.any(String),
      name: expect.any(String),
      idDoc: expect.any(String),
      group: expect.any(String),
      role: expect.any(String),
      accumulated: expect.any(Number)
    })
  })
})

describe('Login users', () => {
  const controller = {...appController}
  const { body } = loginReq()
  const loginMock = jest.spyOn(controller, "login")
  const response = loginMock(loginReq(), loginRes())

  test('Login data should be valid', () => {
    expect(body).toBeTruthy()
    expect(body).toMatchObject({
      email: expect.stringMatching(emailRegex),
      password: expect.any(String)
    })
  })

  test('Should return auth token', () => {
    // response exist
    expect(response).toBeTruthy()
    // token
    const token = response.json();
    expect(token).toMatch(jwtRegex)
  })  
})
