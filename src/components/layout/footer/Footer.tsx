import React from "react";
import { Box, FlexWrapper, Typography } from "components";
import { Logo } from "assets/icons";
import { mobile } from "styles/theme";
import { SocialLinks } from "..";
import styled from "styled-components/macro";

export const Footer: React.FC = () => (
  <FooterStyles>
    <FlexWrapper
      alignItems="center"
      borderBottom="1px solid #ccc"
      justifyContent="space-between"
      paddingY="s16"
      paddingX={{ _: "s64", desktop: "s128" }}
    >
      <Logo />
      <FlexWrapper gap="0.5rem" marginRight={{ _: "s0", desktop: "s32" }}>
        <SocialLinks />
      </FlexWrapper>
    </FlexWrapper>

    <Typography color="white" py="s16" textAlign="center">
      © 2022 Swimclub. Powered by me 😊
    </Typography>
  </FooterStyles>
);



const FooterStyles = styled(Box).attrs({ as: "footer" })`
  background: linear-gradient(128deg, #000f33 28.7%, #0747da 20%);
  @media ${mobile} {
    background: linear-gradient(128deg, #1a2747 50%, #0747da 50%);
  }
`;
