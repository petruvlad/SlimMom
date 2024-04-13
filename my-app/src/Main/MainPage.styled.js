import styled from "styled-components";
import { Link } from "react-router-dom";

// Stilizare pentru antet
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  ul li {
    margin-right: 20px;
  }
`;

// Stilizare pentru subsol
export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

// Stilizare pentru logo
export const LogoContainer = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

// Stilizare pentru link-urile din meniu
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }
`;
