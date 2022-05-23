import React from "react";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import {ContainerSmall, FlexWrapper, SectionWrapper, Typography } from "components";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import { useQuery } from "styles/theme";

export const FindRightProgram: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <SectionWrapper background="linear-gradient(128deg, #000f33 65%, #0747da 35%)">
      <RightProgramStyles>
        <ContainerSmall maxWidth="49.5rem">
          <FlexWrapper
            alignItems="center"
            flexDirection={{ _: "column", desktop: "row" }}
            gap={isMobile ? "0rem" : "2rem"}
          >
            <Typography color="white" fontSize="fs24" fontWeight="fw700">
              Complete the quick quiz and find the right program for you!
            </Typography>
            <ButtonPrimary width={isMobile ? "60%" : "30%"}>
              <Link to="/quiz">Start Quiz</Link>
            </ButtonPrimary>
          </FlexWrapper>
        </ContainerSmall>
      </RightProgramStyles>
    </SectionWrapper>
  );
};

const RightProgramStyles = styled.div``;
