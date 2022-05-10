import {
  Box,
  Container,
  FlexWrapper,
  GridWrapper,
  Image,
  SectionWrapper,
  Typography,
} from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import React from "react";
import styled from "styled-components/macro";
import { mobile, theme, useQuery } from "styles/theme";
import HeroImageDesktop from "../elements/HeroImageDesktop";
import HeroImageMobile from "../elements/HeroImageMobile";

const HeroSection: React.FC = () => {
  const isMobile = useQuery();
  return (
    <HeroStyles>
   

      <Container>
        <FlexWrapper flexDirection={{ _: "column", desktop: "row" }}
        gap={isMobile? '0rem' :'4rem'}
        >
          <Box>
            <Typography type="h4" color="white">
              Unleash the Inner Beast
            </Typography>
            <Box marginY={{ _: "s16", desktop: "s32" }} width="20rem">
              <FlexWrapper justifyContent="flex-start">
                <Typography color="backgroundSecondary">500+ &nbsp;</Typography>
                <Typography color="white">happy community members</Typography>
              </FlexWrapper>
            </Box>
            <Typography color="white">
              Find out how much weight you can lose by taking a 60-sec quiz
              approved by our experts, and get your personalized plan now.
            </Typography>

            <ButtonPrimary margin="2rem 0">Start quiz</ButtonPrimary>
          </Box>
          <HeroImageDesktop />
        </FlexWrapper>
      </Container>
    

    </HeroStyles>
  );
};

export default HeroSection;

const HeroStyles = styled(SectionWrapper)`
  background: linear-gradient(128deg, #1a2747 46.1%, #65bdf0 35%);
  padding:10rem 4rem;

   @media ${mobile} {
    padding: 2rem 0.5rem ;
   background:linear-gradient(128deg, #1A2747 38.7%, #65bdf0 30%);
    
  } 
`;
