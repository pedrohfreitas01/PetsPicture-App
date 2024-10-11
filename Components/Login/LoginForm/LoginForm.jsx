import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginFormContainer } from "./style";
import Input from "../../Input";
import { Button } from "../../Button/style";

function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username"></Input>
        <Input label="Password" type="password" name="password"></Input>
        <Button>Enviar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  );
}

export default LoginForm;
