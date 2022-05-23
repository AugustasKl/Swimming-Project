import React, { useState } from "react";
import { FlexWrapper, Typography } from "components";
import { Loader } from "components/loader/Loader";
import { mobile } from "styles/theme";
import { navigate } from "gatsby";
import styled from "styled-components/macro";

export const DataAnalyzer: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(true);
  
        setTimeout(() => {
            setIsDisplayed(true);
            navigate('/checkout')
          }, 3000);   
  return (
    <>
      {isDisplayed && (
        <StyledDataAnalyzer>
          <Typography type="h6">Calculating your results...</Typography>
          <Loader />
          <Typography>It will take just a couple of seconds...</Typography>
        </StyledDataAnalyzer>
       )}
    </>
  );
};

const StyledDataAnalyzer = styled(FlexWrapper)`
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 35rem;
  
  margin: 5rem auto;
  padding-bottom: 2.5rem;
  
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  gap: 3rem;

  @media ${mobile} {
  width: 100%;
  } 
`;

