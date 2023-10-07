import styled from "styled-components";

export const Card = styled.div`
   position: relative;
`;

export const Image = styled.img`
   width: 274px;
   height: 274px;

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
