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
import { useQuery } from "styles/theme";
import HeroImage from "../elements/HeroImage";

const HeroSection: React.FC = () => {
  const isMobile = useQuery();
  return (
    <>
      <SectionWrapper
        padding="10rem 4rem"
        background="linear-gradient(128deg, #1A2747 45.5%, #65bdf0 30%)"
      >
        <Container>
          <FlexWrapper
            flexDirection={{ _: "column", desktop: "row" }}
            gap="4rem"
          >
            <Box maxWidth="40rem">
              <Typography type="h4" color='white'>Unleash the Inner Beast</Typography>
              <Box marginY={{ _: "s16", desktop: "s32" }}>
                <FlexWrapper>
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
      </SectionWrapper>
    </>
  );
};

export default HeroSection;

const HeroStyles = styled.div`
  background: linear-gradient(128deg, #1a2747 65%, #d0deff 35%);
`;
