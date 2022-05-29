import React from "react";
import { Box, Container, FlexWrapper, Image, SectionWrapper, Typography} from "components";
import { logosArray, logosMobileArray } from "constants/partners";
import { mobile, tablet, useQuery } from "styles/theme";
import styled from "styled-components/macro";

export const Partners: React.FC = () => {
  const { isMobile } = useQuery();
  const isMobileData = isMobile ? logosMobileArray : logosArray;
  return (
    <SectionWrapper>
      <Container>
        <Typography pb="s32" textAlign="center" type="h6">
          Our beloved Partners
        </Typography>
        <FlexWrapper gap="1.5rem" justifyContent="center">
          {isMobileData.map((tag) => (
            <LogosStyles key={tag}>
              <Image src={tag} alt={tag} height="4rem" width="10rem" />
            </LogosStyles>
          ))}
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

const LogosStyles = styled(Box)`
  @media ${tablet} {
    img {
      height: 3rem;
      width: 8rem;
    }
  }
  @media ${mobile} {
    img {
      height: 3rem;
      width: 5rem;
    }
  }
`;
