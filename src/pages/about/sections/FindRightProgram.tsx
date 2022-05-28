import React from "react";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import {ContainerSmall, FlexWrapper, SectionWrapper, Typography } from "components";
import { navigate } from "gatsby";
import { theme, useQuery } from "styles/theme";

export const FindRightProgram: React.FC = () => {
  const { isMobile, isTablet } = useQuery();
  return (
    <SectionWrapper background={theme.backgrounds.findRightProgram}>   
        <ContainerSmall maxWidth="49.5rem">
          <FlexWrapper
            alignItems="center"
            flexDirection={{ _: "column", desktop: "row" }}
            gap={isTablet ? "0rem" : "2rem"}
          >
            <Typography color="white" fontFamily={theme.fontFamily.secondary} fontSize="fs24" fontWeight="fw600" paddingBottom={{_:'s20', desktop:'s0'}} >
              Complete the quick quiz and find the right program for you!
            </Typography>
            <ButtonPrimary onClick={()=>{navigate('/quiz')}}  width={isMobile ? "60%" : "35%"}>
              Start Quiz
            </ButtonPrimary>
          </FlexWrapper>
        </ContainerSmall>
    </SectionWrapper>
  );
};


