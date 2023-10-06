import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const SharedLayout = () => {
   return (
      <div>
         <Header></Header>
         <Suspense fallback={<div>Loading...</div>} />
         <Outlet />
      </div>
   );
};

export default SharedLayout;
