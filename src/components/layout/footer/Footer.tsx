import React from "react";
import { Box, FlexWrapper, Typography } from "components";
import { Logo } from "assets/icons";
import { desktop, mdesktop, mobile, tablet, theme } from "styles/theme";
import { SocialLinks } from "..";
import styled from "styled-components/macro";

export const Footer: React.FC = () => (
  <FooterStyles>
    <FlexWrapper
      alignItems="center"
      borderBottom={`1px solid ${theme.colors.radioColor}`}
      flexDirection={{ _: "column", desktop: "row" }}
      justifyContent="space-between"
      paddingY={{ _: "s32", desktop: "s24" }}
      paddingX={{ _: "s8", desktop: "s160" }}
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
