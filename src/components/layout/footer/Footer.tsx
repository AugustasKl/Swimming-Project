import Logo from "assets/icons/Logo";
import { Box, FlexWrapper, Image, Typography } from "components";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components/macro";
import { mobile, useQuery } from "styles/theme";
// import HomeNav from "../navigation/HomeNav";
import NavigationOptions from "../navigation/NavigationOptions";
// import SocialItems from "../navigation/SocialItems";
import SocialLinks from "../navigation/SocialLinks";

const Footer: React.FC = () => {
  const { isMobile } = useQuery();
  return (
      <FooterStyles>
        <FlexWrapper
          justifyContent="space-between"
          alignItems="center"
          paddingY="s16"
          paddingX={{_:'s64', desktop:'s128'}}
          borderBottom="1px solid #ccc"
          
          >
          <Logo />
          <FlexWrapper
          gap="0.5rem"
          marginRight={{_:'s0',desktop:'s32'}}
          
          >
          <SocialLinks />
            </FlexWrapper>  
        </FlexWrapper>

        <Typography color="white" py="s16" textAlign="center">
            © 2022 Swimclub. Powered by me 😊
          </Typography>

      </FooterStyles>
 
  );
};

export default Footer;

const FooterStyles = styled(Box).attrs({as:'footer'})`
  background: linear-gradient(128deg, #000f33 24.4%, #0747da 20%);
  @media ${mobile} {
  
    /* padding: 0 0.5rem ; */
   background:linear-gradient(128deg, #1A2747 50%, #0747da 50%);
 
  } 
`;
