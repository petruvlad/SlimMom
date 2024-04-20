import React from "react";
import {NavWrapper,NavLink,NavList,NavItem}  from "./Navigation.styled"
const Navigation = ({ links }) => {
  return (
    <NavWrapper>
      <NavList>
        {links.map((link, index) => (
          <NavItem key={index}>
            <NavLink href={link.url}>{link.text}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
