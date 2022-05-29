import React from "react";
import { Box, FlexWrapper, SocialLinks, Typography } from "components";
import { Logo } from "assets/icons";
import { mdesktop, mobile, theme } from "styles/theme";
import styled from "styled-components/macro";

export const Footer: React.FC = () => (
  <FooterStyles>
    <FlexWrapper
      alignItems="center"
      borderBottom={`1px solid ${theme.colors.radioColor}`}
      justifyContent="space-between"
      paddingY={{ _: "s32", desktop: "s16" }}
      paddingX={{ _: "s20", desktop: "s160" }}
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
  @media ${mdesktop} {
    background: ${theme.backgrounds.footerMDesktop};
  }
  
  background: ${theme.backgrounds.footerDesktop};
  @media ${mobile} {
    background: ${theme.backgrounds.footerMobile};
  }
`;
