import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const MenuBox = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 15px;
`;

export const NavBox = styled.nav`
  border-bottom: 1px solid;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
  padding: 5px;
`;
