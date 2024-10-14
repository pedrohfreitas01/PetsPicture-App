import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import { LoginFormContainer } from "./style";
import Input from "../../Input";
import { Button } from "../../Button/style";
import useForm from "../../../src/Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../../src/api";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  });

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);

      const data = await response.json();

      window.localStorage.setItem("token", data.token);
      getUser(data.token);

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
        <Input label="User" type="text" name="username" {...username}></Input>
        <Input
          label="Password"
          type="password"
          name="password"
          {...password}
        ></Input>
        <Button>Enviar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  );
}

export default LoginForm;
