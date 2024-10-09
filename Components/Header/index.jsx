import React from "react";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";
import  Dogs  from "../../src/assets/dogs.svg";


function Header() {
  return (
    <HeaderContainer>
      <nav className="container">
        <Link to="/">
          <img src={Dogs} alt="Dogs Logo" />
        </Link>
        <Link to="/login" className="login">Login / Criar</Link>
      </nav>

    </HeaderContainer>
  );
}

export default Header;
