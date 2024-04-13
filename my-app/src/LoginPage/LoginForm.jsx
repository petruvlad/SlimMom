import React, { useState } from "react";
import {
  LoginFormContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
} from "./LoginForm.styled";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Logica de autentificare
      // Dacă autentificarea eșuează, aruncăm o excepție
      throw new Error("Autentificare eșuată. Verificați emailul și parola.");
    } catch (error) {
      // Gestionare erori
      setError(error.message); // Setăm mesajul de eroare în starea locală 'error'
    }
  };

  return (
    <LoginFormContainer>
      <h2>Autentificare</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Parolă:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Autentificare</Button>
      </Form>
    </LoginFormContainer>
  );
}

export default LoginForm;
