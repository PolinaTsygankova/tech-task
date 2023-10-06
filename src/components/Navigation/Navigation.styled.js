import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.nav`
   margin: 0;
   display: flex;

   gap: 50px;
`;

export const Item = styled(NavLink)`
   color: #70b6e9;

   text-decoration: none;
   font-size: 17px;
   font-style: normal;
   font-weight: 600;
   line-height: 20px;
   transition: color 200ms ease-out;

   &:hover {
      color: #fff;
   }

   &.active {
      color: #fff;
   }
`;
