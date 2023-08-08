import { render, screen } from "@testing-library/react";
import { Register } from ".";
import { BrowserRouter } from "react-router-dom";

describe("REGISTER TESTS", () => {

  test('Should show complete fields', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    expect(screen.getByTitle('email')).toBeDefined()
    expect(screen.getByTitle('password')).toBeDefined()
    expect(screen.getByTitle('name')).toBeDefined()
    expect(screen.getByTitle('idDoc')).toBeDefined()
    expect(screen.getByTitle('group')).toBeDefined()
    expect(screen.getByTitle('role')).toBeDefined()
    expect(screen.getByTitle('regCode')).toBeDefined()
  })

  test('Should show send button', async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const sendBtn = screen.getByText("Enviar");
    expect(sendBtn).toBeDefined();
  })
})