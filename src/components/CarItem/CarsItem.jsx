import React from "react";
import { Image, ImageWrapper } from "./CarsItem.styled";

const CarsItem = ({ carInfo }) => {
   const {
      id,
      year,
      make,
      model,
      type,
      img,
      description,
      fuelConsumption,
      engineSize,
      accessories,
      functionalities,
      rentalPrice,
      rentalCompany,
      address,
      rentalConditions,
      mileage,
   } = carInfo;

   console.log(img);

   return (
      <div>
         <Image
            src={img}
            alt={model}
            style={{ backgroundImage: `url(${img})` }}
         />

         <p>.</p>
         <p></p>
         <p>qweqweqwe | qweqwe</p>
         <button>Learn more</button>
      </div>
   );
};

export default CarsItem;
