import React from "react";
import { FlexWrapper, Image } from "components";
import { tablet, theme, useQuery } from "styles/theme";
import styled from "styled-components/macro";

export const HeroImage: React.FC = () => {
  const { isMobile } = useQuery();
  return (
      <HeroImageStyles>
        {isMobile ? (
          <Image src="swimmingMobile" alt="swimming freestyle"  />
        ) : (
          <Image src="swimmingDesktop" alt="swimming mobile freestyle" />
        )}
      </HeroImageStyles>
  );
};
const HeroImageStyles = styled(FlexWrapper)`
  opacity: 0.8;
  img {
    border-radius: ${theme.radii.r10};
  }
  @media ${tablet} {
    img {
      width: 100%;
    }
  }

  
`;
