import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginFormContainer } from "./style";
import Input from "../../Input";
import { Button } from "../../Button/style";
import useForm from "../../../src/Hooks/useForm";
import { UserContext } from "../../../src/Context/UserContext"; // Importa o UserContext

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin } = useContext(UserContext); // Usa o contexto para pegar a função userLogin

  const handleSubmit = (event) => {
    event.preventDefault();
    userLogin(username.value, password.value); // Simplesmente chama a função userLogin
  };

  return (
    <LoginFormContainer>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Enviar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </LoginFormContainer>
  );
}

export default LoginForm;
