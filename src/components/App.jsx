import React from "react";
// import logo from "./logo.svg";
import Header from "./Header/Header.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import CataloguePage from "../pages/CataloguePage/CataloguePage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";

function App() {
   return (
      <>
         <Header />

         <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/catalog" element={<CataloguePage />} />
            <Route path="/favorites" element={<FavouritePage />} />
         </Routes>
      </>
   );
}

export default App;
