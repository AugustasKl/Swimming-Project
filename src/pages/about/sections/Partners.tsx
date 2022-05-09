import { UniversalImages } from "assets/icons";
import {
  Box,
  Container,
  FlexWrapper,
  SectionWrapper,
  Typography,
} from "components";
import React from "react";
import styled from "styled-components/macro";
import { mobile, useQuery } from "styles/theme";
const logosArray = ["lithuaniaSwimming", "usaSwimming", "olympics"];
const logosMobileArray = ["lithuaniaWithoutText", "usaWithoutText", "olympics"];

export const Partners: React.FC = () => {
  const { isMobile } = useQuery();

  const isMobileData = isMobile ? logosMobileArray : logosArray;
  return (
    <SectionWrapper>
      <Container>
        <Typography type="h6" pb="s32" textAlign="center">
          Our beloved Partners
        </Typography>
        <FlexWrapper gap="2rem" justifyContent="center">
          {isMobileData.map((tag) => (
            <LogosStyles>
              <UniversalImages tag={tag} width="10rem" height="4rem" />
            </LogosStyles>
          ))}
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

const LogosStyles = styled(Box)`
  /* gap:3rem; */
  &:not(:last-child) {
    border-right: 2px solid #ccc;
    padding-right: 1rem;
  }
  @media ${mobile} {
    img {
      width: 5rem;
      height: 3rem;
    }
  }
`;
