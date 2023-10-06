import React from "react";

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
   return <div>CarsItem</div>;
};

export default CarsItem;
