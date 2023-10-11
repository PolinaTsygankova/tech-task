import React from "react";
import { useSelector } from "react-redux";
import { favouriteCars } from "../../redux/selectors";
import CarsItem from "./../CarItem/CarsItem";
import { List, Title } from "../CarsList/CarsList.styled";

const CarsList = () => {
   const favouriteCarsArray = useSelector(favouriteCars);

   return (
      <>
         {favouriteCarsArray.length === 0 ? (
            <Title>You don't add favourite cars yet</Title>
         ) : (
            <List>
               {favouriteCarsArray.map((car) => {
                  const { id } = car;
                  return <CarsItem carInfo={car} key={id} car={car} />;
               })}
            </List>
         )}
      </>
   );
};

export default CarsList;
