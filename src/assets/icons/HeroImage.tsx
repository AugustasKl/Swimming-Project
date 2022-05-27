import React from "react";
import { FlexWrapper, Image } from "components";
import styled from "styled-components/macro";
import { mobile, tablet, theme, useQuery } from "styles/theme";

export const HeroImage: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <FlexWrapper opacity="0.8">
      <HeroImageStyles>
        {isMobile ? (
          <Image src="swimmingMobile" alt="swimming freestyle" />
        ) : (
          <Image src="swimmingDesktop" alt="swimming mobile freestyle" />
        )}
      </HeroImageStyles>
    </FlexWrapper>
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

  
  @media ${mobile} {
    img {
      width: 95%;
    }
  }
`;
