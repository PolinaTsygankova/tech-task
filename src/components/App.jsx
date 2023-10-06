import React from "react";
// import logo from "./logo.svg";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import WelcomePage from "../pages/WelcomePage/WelcomePage";
import CataloguePage from "../pages/CataloguePage/CataloguePage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import SharedLayout from "./SharedLayout/SharedLayout";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route path="/" element={<WelcomePage />} />
               <Route path="/catalog" element={<CataloguePage />} />
               <Route path="/favorites" element={<FavouritePage />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;