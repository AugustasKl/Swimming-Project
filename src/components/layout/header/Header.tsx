import React from "react";
import { Box, FlexWrapper } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { navigate } from "gatsby";
import { Logo } from "assets/icons";
import { mobile, useQuery } from "styles/theme";
import { NavigationOptions } from "..";
import { questions } from "store/users/selectors";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";


export const Header: React.FC = () => {
  const { isMobile } = useQuery();
  const questionsData = useSelector(questions);
  
  return (
    <HeaderWrapper>
      <FlexWrapper
        alignItems="center"
        flexDirection={{ _: "column", desktop: "row" }}
        gap={isMobile ? "1rem" : "0rem"}
        justifyContent="space-between"
        paddingY={{ _: "s32", desktop: "s24" }}
        paddingX={{ _: "s8", desktop: "s160" }}
      >
        <Logo />
        <NavigationOptions />
        {!isMobile && (
          <FlexWrapper>
            {questionsData ===null && (
              <ButtonPrimary onClick={()=>{navigate('/quiz')}}>
                Start Quiz
              </ButtonPrimary>
            )}
          </FlexWrapper>
        )}
      </FlexWrapper>
    </HeaderWrapper>
  );
};



const HeaderWrapper = styled(Box).attrs({ as: "header" })`
  background: linear-gradient(128deg, #000f33 65%, #0747da 35%);
 
  @media ${mobile} {
    background: linear-gradient(128deg, #000f33 93%, #0747da 35%);
  }
`;
