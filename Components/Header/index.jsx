import React from "react";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <h2>Header</h2>
      <nav className="container">
        <Link to="/home">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>

    </HeaderContainer>
  );
}

export default Header;
