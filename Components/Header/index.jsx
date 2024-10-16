import React, { useContext } from "react";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";
import  Dogs  from "../../src/assets/dogs.svg";
import { UserContext } from "../../src/Context/UserContext";


function Header() {

  const {user} = useContext(UserContext)

  return (
    <HeaderContainer>
      <nav className="container">
        <Link to="/">
          <img src={Dogs} alt="Dogs Logo" />
        </Link>
        {user ? (
          <Link to="/conta" className="login">
            Bem Vindo, {user.nome}
          </Link>
        ) : (
          <Link to="/login" className="login">
            Login / Criar
          </Link>
        )}
      </nav>
    </HeaderContainer>
  );
}

export default Header;
