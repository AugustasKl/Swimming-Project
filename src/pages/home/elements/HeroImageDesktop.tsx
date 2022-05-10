import { FlexWrapper, Image } from "components";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components/macro";
import { mobile, useQuery } from "styles/theme";

const HeroImageDesktop: React.FC = () => {
    const{isMobile}=useQuery()
  return (
    <HeroImageDesktopStyles>
      {isMobile? <Image src="swimmingMobile" alt="swimming freestyle" /> :<Image src="swimmingDesktop" alt="swimming mobile freestyle" />}
    </HeroImageDesktopStyles>
  );
};

export default HeroImageDesktop;

const HeroImageDesktopStyles = styled(FlexWrapper)`
  opacity: 0.8;
`;
