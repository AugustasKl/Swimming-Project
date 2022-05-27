import React from "react";
import Confetti from "react-confetti";
import { Container, FlexWrapper, Typography } from "components";
import styled from "styled-components/macro";
import { theme, useQuery } from "styles/theme";

export const SuccessSection: React.FC = () => {
  const { isMobile, isTablet } = useQuery();
  return (
    <SuccessSectionsStyles>
      <Container>
          <Typography
            color="white"
            fontSize="fs40"
            fontWeight="fw700"
            paddingY='s48'
            textAlign="center"
          >
            Thank you for your order!
          </Typography>
        <Confetti numberOfPieces={30} width={isMobile ? 480: (isTablet? 768: 2000)} />
      </Container>
    </SuccessSectionsStyles>
  );
};

const SuccessSectionsStyles = styled(FlexWrapper)`
  width: 100%;

  background: ${theme.backgrounds.findRightProgram};
  
`;
