import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const Lochte: React.FC = () => {
  return (
    <SwimmersStyles>
      <StaticImage
        src="./../images/lochte.jpg"
        alt="swimmer Lochte"
          style={{height:'17rem', width:'12rem'}}
      />
    </SwimmersStyles>
  );
};

const SwimmersStyles = styled.image`
  position: absolute;
  top: 10%;
  left:18%;
  /* z-index: 2; */
  /* border-radius: ${theme.radii.r50}; */
`;
