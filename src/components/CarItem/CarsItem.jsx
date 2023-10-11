import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../redux/operations";
import Modal from "../Modal/Modal";
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
   NotFavouriteBtn,
   LearnMoreBtn,
} from "./CarsItem.styled";

const CarsItem = ({ carInfo, car }) => {
   const {
      id,
      year,
      make,
      model,
      type,
      img,
      //   description,
      //   fuelConsumption,
      // engineSize,
      //   accessories,
      // functionalities,
      rentalPrice,
      rentalCompany,
      address,
      // rentalConditions,
      // mileage,
   } = carInfo;

   const dispatch = useDispatch();
   const [isFavourite, setIsFavourite] = useState(false);
   const [isModalVisible, setisModalVisible] = useState(false);

   const handleToggle = () => {
      dispatch(toggleFavourite(car));

      setIsFavourite(!isFavourite);
   };

   const arrayOfAddress = address.split(" ");
   const country = arrayOfAddress[4];
   const city = arrayOfAddress[3].substring(0, arrayOfAddress[3].length - 1);

   return (
      <Card>
         <ImageGradient></ImageGradient>

         {img === undefined ? (
            <Image src="default-img.webp" alt={model} />
         ) : (
            <Image src={img} alt={model} />
         )}

         {isFavourite ? (
            <NotFavouriteBtn onClick={handleToggle} />
         ) : (
            <FavouriteBtn onClick={handleToggle} />
         )}

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

         <LearnMoreBtn onClick={() => setisModalVisible(true)}>
            Learn more
         </LearnMoreBtn>
         {isModalVisible && <Modal />}
      </Card>
   );
};

export default CarsItem;
