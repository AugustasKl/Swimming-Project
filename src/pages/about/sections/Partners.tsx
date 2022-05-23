import React from "react";
import {Box, Container, FlexWrapper, SectionWrapper, Typography} from "components";
import { logosArray, logosMobileArray } from "constants/partners";
import { mobile, useQuery } from "styles/theme";
import styled from "styled-components/macro";
import { UniversalImages } from "assets/icons";


export const Partners: React.FC = () => {
  const { isMobile } = useQuery();
  const isMobileData = isMobile ? logosMobileArray : logosArray;
  return (
    <SectionWrapper>
      <Container>
        <Typography pb="s32" textAlign="center" type="h6">
          Our beloved Partners
        </Typography>
        <FlexWrapper gap="2rem" justifyContent="center">
          {isMobileData.map((tag) => (
            <LogosStyles key={tag}>
              <UniversalImages height="4rem" tag={tag} width="10rem"/>
            </LogosStyles>
          ))}
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

const LogosStyles = styled(Box)`
  &:not(:last-child) {
    border-right: 2px solid #ccc;
    padding-right: 1rem;
  }
  @media ${mobile} {
    img {
      height: 3rem;
      width: 5rem;
    }
  }
`;
