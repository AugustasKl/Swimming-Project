import Logo from "assets/icons/Logo";
import { Box, Container, FlexWrapper, Image, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import React from "react";
import styled from "styled-components/macro";
import { theme, useQuery } from "styles/theme";
import NavigationOptions from "../navigation/NavigationOptions";
import SocialLinks from "../navigation/SocialLinks";
// import {Logo} from 'assets/icons'

const Header: React.FC = () => {
  const{isMobile}=useQuery()
  return (
    
    
    
    <Box as="header"  >
      <HeaderWrapper>
      {/* <Container > */}
      <FlexWrapper
        justifyContent="space-between"
        flexDirection={{ _: "column", desktop: "row" }}
        alignItems="center"
        // boxShadow= "0 0.25rem 0.625rem -0.375rem"
        paddingY={{ _: "s32", desktop: "s24" }}
        paddingX={{ _: "s8", desktop: "s160" }}
        gap={isMobile ? "2rem" : "0rem"}
        >
        <Logo />
        <NavigationOptions />
        <FlexWrapper gap="1rem" >
          {/* <SocialLinks /> */}
          <ButtonPrimary>Start Quiz</ButtonPrimary>
        </FlexWrapper>   
      </FlexWrapper>
          </HeaderWrapper>
    </Box>
   
       
  );
};

export default Header;

const HeaderWrapper = styled(Box)`
        background: linear-gradient(128deg, #000F33 65%, #0747DA 35%);
`;
 