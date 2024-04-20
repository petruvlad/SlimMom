import styled from 'styled-components';

// Stilizarea containerului pentru bara de navigare
 export const NavWrapper = styled.nav`
  background-color: #333;
  color: #fff;
`;

// Stilizarea listei de link-uri din bara de navigare
 export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

// Stilizarea fiecărui element de link din lista de link-uri
 export const NavItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

// Stilizarea link-urilor din bara de navigare
 export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`;