import React from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation";
import HeaderContainer from "./Header.styled";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
}

export default Header;
