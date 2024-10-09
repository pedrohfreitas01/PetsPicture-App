import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  text-align: center;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  img {
    padding: 0.5rem 0;
  }

  .login {
    color: #333;
    display: flex;
    align-items: center;
  }

  .login::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url("../../src/assets/usuario.svg") no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
