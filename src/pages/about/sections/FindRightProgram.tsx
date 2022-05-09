import { FlexWrapper, SectionWrapper, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { ContainerSmall } from "components/wrappers/ContainerSmall";
import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "styles/theme";

export const FindRightProgram: React.FC = () => {
    const {isMobile}=useQuery()
  return (
    <SectionWrapper background="linear-gradient(128deg, #000f33 65%, #0747da 35%)">
      <RightProgramStyles>
        <ContainerSmall maxWidth="49.5rem">
          <FlexWrapper gap={isMobile ? '0rem': '2rem'} alignItems="center" flexDirection={{_:'column', desktop:'row'}}>
            <Typography fontSize="fs24" fontWeight="fw700" color="white">
              Complete the quick quiz and find the right program for you!
            </Typography>
            <ButtonPrimary width={isMobile? '60%' :'30%'}>Start Quiz</ButtonPrimary>
          </FlexWrapper>
        </ContainerSmall>
      </RightProgramStyles>
    </SectionWrapper>
  );
};

const RightProgramStyles = styled.div`
  
`;
