import React from "react";
import {Box,Container,FlexWrapper,SectionWrapper,Typography} from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { HeroImage} from "../elements";
import { Link } from "gatsby";
import { mobile } from "styles/theme";
import styled from "styled-components/macro";

export const HeroSection: React.FC = () => (
  <HeroStyles>
    <Container>
      <FlexWrapper flexDirection={{ _: "column", desktop: "row" }}>
        <Box>
          <Typography type="h4" color="white">
            Unleash the Inner Beast
          </Typography>
          <Box marginY={{ _: "s16", desktop: "s32" }} width="20rem">
            <FlexWrapper justifyContent="flex-start">
              <Typography color="orange">500+ &nbsp;</Typography>
              <Typography color="white">happy community members</Typography>
            </FlexWrapper>
          </Box>
          <Typography color="white" marginRight={{ desktop: "s24" }}>
            Take a 30-sec quiz approved by our professionals and get your personalized swimming program right now! 
          </Typography>
          <ButtonPrimary margin="2rem 0">
            <Link to="/quiz">Start Quiz</Link>
          </ButtonPrimary>
        </Box>
        <HeroImage />
      </FlexWrapper>
    </Container>
  </HeroStyles>
);



const HeroStyles = styled(SectionWrapper)`
  background: linear-gradient(128deg, #1a2747 47.7%, #65bdf0 35%);
  padding: 6.8rem 4rem;

  @media ${mobile} {
    padding: 2rem 0.5rem;
    background: linear-gradient(128deg, #1a2747 38.7%, #65bdf0 30%);
  }
`;
