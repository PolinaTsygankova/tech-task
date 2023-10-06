import React from "react";
import { HeaderWrapper } from "./Header.styled";
import Navigation from "./../Navigation/Navigation";

const Header = () => {
   return (
      <HeaderWrapper>
         <Navigation />
      </HeaderWrapper>
   );
};

export default Header;
