import React from "react";
import { Header, Nav, Footer, LogoContainer, NavLink } from "./MainPage.styled";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Header>
        <LogoContainer>
          {/* Logo-ul ca un link către pagina principală */}
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>
        <Nav>
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </Nav>
      </Header>

      {/* Subsol */}
      <Footer>
        <p>Copyright © 2024. Toate drepturile rezervate.</p>
      </Footer>
    </div>
  );
}

export default MainPage;
