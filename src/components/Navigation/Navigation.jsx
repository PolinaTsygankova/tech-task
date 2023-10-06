import React from "react";
import { NavList, Item } from "./Navigation.styled";

const Navigation = () => {
   return (
      <NavList>
         <Item to="/">Home</Item>
         <Item to="/catalog">Catalogue</Item>
         <Item to="/favorites">Favoutite</Item>
      </NavList>
   );
};

export default Navigation;
