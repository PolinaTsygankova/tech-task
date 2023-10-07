import styled from "styled-components";

export const Card = styled.div`
   position: relative;
   width: 274px;
   height: 450px;
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
   top: 0;
   left: 0;

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
   top: 14px;
   right: 14px;

   border: none;
   background-image: url("normal.svg");
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
   border-right: 1.5px solid rgba(18, 20, 23, 0.1);
   margin-right: 6px;
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
`;

//export const Title = styled.p``
