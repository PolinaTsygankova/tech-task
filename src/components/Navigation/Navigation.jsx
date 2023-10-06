import React from "react";
import { NavList, Item } from "./Navigation.styled";

const Navigation = () => {
   return (
      <NavList>
         <Item>Home</Item>
         <Item>Catalogue</Item>
         <Item>Favoutite</Item>
      </NavList>
   );
};

export default Navigation;
