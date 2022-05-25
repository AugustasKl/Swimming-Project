import React from "react";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import {ContainerSmall, FlexWrapper, SectionWrapper, Typography } from "components";
import { navigate } from "gatsby";
import { useQuery } from "styles/theme";

export const FindRightProgram: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <SectionWrapper background="linear-gradient(128deg, #000f33 65%, #0747da 35%)">   
        <ContainerSmall maxWidth="49.5rem">
          <FlexWrapper
            alignItems="center"
            flexDirection={{ _: "column", desktop: "row" }}
            gap={isMobile ? "0rem" : "2rem"}
          >
            <Typography color="white" fontSize="fs24" fontWeight="fw700" paddingBottom={{_:'s20', desktop:'s0'}} >
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


