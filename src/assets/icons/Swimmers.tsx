import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const Swimmers: React.FC = () => {
  return (
    <SwimmersStyles>
      <StaticImage
        src="./../images/swimmers.jpg"
        alt="two swimmers"
          style={{height:'10rem', width:"18rem"}}
      />
    </SwimmersStyles>
  );
};

const SwimmersStyles = styled.image`
  position: relative;
  top: 50%;
  left:27%;
  z-index: ${theme.zIndices.upperElement};
`;
