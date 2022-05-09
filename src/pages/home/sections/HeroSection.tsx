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
import { theme, useQuery } from "styles/theme";
import HeroImage from "../elements/HeroImage";

const HeroSection: React.FC = () => {
  const isMobile = useQuery();
  return (
    // <HeroStyles>
      <SectionWrapper
        padding="10rem 4rem"
        background="linear-gradient(128deg, #1A2747 46.2%, #65bdf0 30%)">
          {/* <HeroStyles> */}
       
        <Container>
          <FlexWrapper
            flexDirection={{ _: "column", desktop: "row" }}
            gap="4rem"
            width="70rem"
          >
            <Box >
              <Typography type="h4" color='white' >Unleash the Inner Beast</Typography>
              <Box marginY={{ _: "s16", desktop: "s32" }}>
                <FlexWrapper justifyContent='center'>
                  <Typography color='backgroundSecondary'>500+ &nbsp;</Typography>
                  <Typography color='white'>happy community members</Typography>
                </FlexWrapper>
              </Box>
              <Typography color='white'>
                Find out how much weight you can lose by taking a 60-sec quiz
                approved by our experts, and get your personalized plan now.
              </Typography>

              <ButtonPrimary>Start quiz</ButtonPrimary>
            </Box>
            <HeroImage />
          </FlexWrapper>
        </Container>
       
      {/* </HeroStyles> */}
    {/* </HeroStyles> */}
      </SectionWrapper>
  );
};

export default HeroSection;

const HeroStyles = styled.div`
  /* background: linear-gradient(128deg, #1a2747 65%, #65bdf0 35%); */
  /* background-image: linear-gradient(128deg,
        
        rgba(26, 39, 71),
        rgba(101, 189, 240)),
    url('../../../assets/images/swimming.png'); */
    /* background-image:"./../../../assets/images/swimmingtTiles.jpg" */
`;
