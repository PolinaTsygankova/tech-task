import React from "react";
import {
   Image,
   ImageGradient,
   Card,
   Title,
   ModelAccent,
   TitleWrapper,
   InfoWrapper,
   InfoItem,
   FavouriteBtn,
   LearnMoreBtn,
} from "./CarsItem.styled";

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
      functionalities,
      rentalPrice,
      rentalCompany,
      address,
      rentalConditions,
      mileage,
   } = carInfo;

   const arrayOfAddress = address.split(" ");
   const country = arrayOfAddress[4];
   const city = arrayOfAddress[3].substring(0, arrayOfAddress[3].length - 1);
   const functionality = functionalities[0];

   return (
      <Card>
         <ImageGradient></ImageGradient>

         <Image
            src={img === undefined ? "default-img.webp" : img}
            alt={model}
         />

         <FavouriteBtn />

         <TitleWrapper>
            <Title>
               {make} <ModelAccent>{model},</ModelAccent> {year}
            </Title>

            <p>{rentalPrice}</p>
         </TitleWrapper>

         <InfoWrapper>
            <InfoItem>{city}</InfoItem> <InfoItem>{country}</InfoItem>
            <InfoItem>{rentalCompany}</InfoItem> <InfoItem>{type}</InfoItem>
            <InfoItem>{make}</InfoItem> <InfoItem>{id}</InfoItem>
            {/* <InfoItem>{functionality}</InfoItem> */}
         </InfoWrapper>

         <LearnMoreBtn>Learn more</LearnMoreBtn>
      </Card>
   );
};

export default CarsItem;
