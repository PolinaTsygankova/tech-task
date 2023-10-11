import React from "react";
import { useSelector } from "react-redux";
import { allCars } from "../../redux/selectors";
import CarsItem from "./../CarItem/CarsItem";
import { List } from "./CarsList.styled";

const CarsList = () => {
   const cars = useSelector(allCars);

   return (
      <List>
         {cars?.map((car) => {
            const { id } = car;
            return <CarsItem carInfo={car} key={id} car={car} />;
         })}
      </List>
   );
};

export default CarsList;
