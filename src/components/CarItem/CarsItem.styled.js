import styled from "styled-components";

export const Card = styled.div`
   position: relative;
   padding: 14px;
   width: 274px;
   height: 450px;
   border-radius: 10px;

   transition: box-shadow 150ms ease-out;

   &:hover {
      box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%),
         0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
   }
`;

export const Image = styled.img`
   width: 274px;
   height: 274px;
   margin-bottom: 14px;

   object-fit: cover;
   border-radius: 10px;
`;

export const ImageGradient = styled.div`
   width: 274px;
   height: 274px;
   position: absolute;
   top: 14px;
   left: 14px;

   border-radius: 10px;
   overflow: hidden;

   background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
   );
`;

export const FavouriteBtn = styled.button`
   width: 18px;
   height: 18px;
   position: absolute;
   top: 16px;
   right: 16px;
   padding: 20px;

   border: none;
   background-image: url("normal.svg");
   background-repeat: no-repeat;
   background-position: center;
   background-color: transparent;
   cursor: pointer;
`;

export const NotFavouriteBtn = styled.button`
   width: 18px;
   height: 18px;
   position: absolute;
   top: 16px;
   right: 16px;
   padding: 20px;

   cursor: pointer;
   border: none;
   background-image: url("active.svg");
   background-repeat: no-repeat;
   background-position: center;
   background-color: transparent;
`;

export const Title = styled.p`
   margin-right: auto;

   color: #121417;
   font-weight: 500;
   line-height: 1.5;
`;

export const ModelAccent = styled.span`
   display: inline-block;

   color: #3470ff;
   font-style: normal;
   font-weight: 500;
   line-height: 1.5;
`;

export const TitleWrapper = styled.div`
   width: 265px;
   display: flex;
   margin-bottom: 8px;
   align-items: center;
   height: 20px;
`;

export const InfoWrapper = styled.p`
   margin: 0;
   margin-bottom: 28px;
`;

export const InfoItem = styled.span`
   display: inline;
   color: rgba(18, 20, 23, 0.5);
   font-size: 12px;
   line-height: 1.5;
   padding-right: 6px;
   margin-right: 6px;

   &:not(:last-child) {
      border-right: 1.5px solid rgba(18, 20, 23, 0.1);
   }
`;

export const LearnMoreBtn = styled.button`
   width: 100%;
   height: 44px;
   padding: 12px 99px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   border-radius: 12px;
   background: #3470ff;

   color: var(--White, #fff);
   font-family: Manrope;
   font-size: 14px;
   font-weight: 600;
   line-height: 1.4;

   transition: background-color 200ms ease-out;

   &:hover,
   &:focus {
      background-color: #0b44cd;
   }
`;

//export const Title = styled.p``
