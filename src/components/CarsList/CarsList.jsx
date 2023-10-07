import React from "react";
import advertsCars from "../../helpers/advertsCars.json";
import CarsItem from "./../CarItem/CarsItem";
import { List } from "./CarsList.styled";

const CarsList = () => {
   return (
      <List>
         {advertsCars?.map((car) => {
            const { id } = car;
            return <CarsItem carInfo={car} key={id} />;
         })}
      </List>
   );
};

export default CarsList;
