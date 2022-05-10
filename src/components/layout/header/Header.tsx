import Logo from "assets/icons/Logo";
import { Box, Container, FlexWrapper, Image, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import React from "react";
import styled from "styled-components/macro";
import { mobile, theme, useQuery } from "styles/theme";
import NavigationOptions from "../navigation/NavigationOptions";
import SocialLinks from "../navigation/SocialLinks";
// import {Logo} from 'assets/icons'

const Header: React.FC = () => {
  const { isMobile } = useQuery();
  return (
   
      <HeaderWrapper>
        {/* <Container > */}
        <FlexWrapper
          justifyContent="space-between"
          flexDirection={{ _: "column", desktop: "row" }}
          alignItems="center"
          paddingY={{ _: "s32", desktop: "s24" }}
          paddingX={{ _: "s8", desktop: "s160" }}
          gap={isMobile ? "1rem" : "0rem"}
        >
          <Logo />
          <NavigationOptions />
          {!isMobile && <FlexWrapper >
            <ButtonPrimary>Start Quiz</ButtonPrimary>
          </FlexWrapper>}
        </FlexWrapper>
      </HeaderWrapper>
   
  );
};

export default Header;

const HeaderWrapper = styled(Box).attrs({as:'header'})`
  background: linear-gradient(128deg, #000f33 65%, #0747da 35%);

  @media ${mobile} {
    background: linear-gradient(128deg, #000f33 93%, #0747da 35%);
  }
`;
