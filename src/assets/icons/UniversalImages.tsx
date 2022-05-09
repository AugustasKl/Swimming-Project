import { Image } from "components";
import React from "react";
import styled from "styled-components/macro";

export const UniversalImages: React.FC<{
  tag: string;
  height?: string;
  width?: string;
  
  
}> = ({ tag, height, width }) => {
  return (
    // <ImageStyle>
      <Image src={tag} alt={tag} height={height} width={width}/>
   
      
  );
};

// const ImageStyle = styled.image<{padding?:string}>`
//   padding: ${({ padding }) => (padding ? padding : "")};
// `;
