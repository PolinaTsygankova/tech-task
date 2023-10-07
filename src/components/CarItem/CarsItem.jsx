import React from "react";
import { Image, ImageGradient, Card } from "./CarsItem.styled";

const CarsItem = ({ carInfo }) => {
   const {
      id,
      year,
      make,
      model,
      type,
      img,
      //   description,
      //   fuelConsumption,
      engineSize,
      //   accessories,
      //   functionalities,
      rentalPrice,
      rentalCompany,
      address,
      rentalConditions,
      mileage,
   } = carInfo;

   const arrayOfAddress = address.split(" ");
   const country = arrayOfAddress[4];
   const city = arrayOfAddress[3];

   console.log(img);

   return (
      <Card>
         <ImageGradient />
         <Image
            src={img !== undefined ? img : "default-img.webp"}
            alt={model}
         />

         <p>
            {make} <span>{model},</span> {year}
         </p>

         <p>{rentalPrice}</p>

         <p>
            {city} | {country}
         </p>
         <button>Learn more</button>
      </Card>
   );
};

export default CarsItem;
