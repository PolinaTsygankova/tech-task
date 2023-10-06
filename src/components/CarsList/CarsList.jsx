import React from "react";
import advertsCars from "../../helpers/advertsCars.json";
import CarsItem from "./../CarItem/CarsItem";

const CarsList = () => {
   return (
      <ul>
         {advertsCars?.map((car) => {
            const { id } = car;
            return <CarsItem carInfo={car} key={id} />;
         })}
      </ul>
   );
};

export default CarsList;
