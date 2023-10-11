import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import CataloguePage from "../pages/CataloguePage/CataloguePage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import SharedLayout from "./SharedLayout/SharedLayout";
import { fetchCars } from "./../redux/operations";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCars());
   }, [dispatch]);

   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/catalog" element={<CataloguePage />} />
            <Route path="/favorites" element={<FavouritePage />} />
         </Route>
      </Routes>
   );
}

export default App;
