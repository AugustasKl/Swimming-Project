import React from "react";
import { Box,Container, FlexWrapper, SectionWrapper, Typography} from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { HeroImage} from "assets/icons";
import { navigate } from "gatsby";
import { tablet, theme } from "styles/theme";
import styled from "styled-components/macro";

export const HeroSection: React.FC = () => (
  <HeroStyles>
    <Container>
      <FlexWrapper flexDirection={{ _: "column",  desktop: "row" }}>
        <Box>
          <Typography color="white" type="h4" >
            Unleash the Inner Beast
          </Typography>
          <Box marginY={{_: "s16", desktop: "s32" }} width="20rem">
            <FlexWrapper justifyContent="flex-start">
              <Typography color="orange">500+ &nbsp;</Typography>
              <Typography color="white">happy community members</Typography>
            </FlexWrapper>
          </Box>
          <Typography color="white">
            Take a 30-sec quiz approved by our professionals and get your personalized swimming program right now! 
          </Typography>
          <ButtonPrimary margin="2rem 0" onClick={()=>{navigate('/quiz')}}>
           Start Quiz
          </ButtonPrimary>
        </Box>
        <HeroImage />
      </FlexWrapper>
    </Container>
  </HeroStyles>
);



const HeroStyles = styled(SectionWrapper)`
  padding: 6.7rem 4rem;
  
  background: ${theme.backgrounds.heroSectionDesktop};

  @media ${tablet} {
    padding: 2rem 0.5rem;

    background: ${theme.backgrounds.heroSectionMobile}
  }
`;
