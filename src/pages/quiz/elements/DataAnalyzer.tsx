import { FlexWrapper, Typography } from "components";
import { Loader } from "components/loader/Loader";
import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { mobile } from "styles/theme";

export const DataAnalyzer: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(true);
  
        setTimeout(() => {
            console.log('nesamone')
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
  gap: 3rem;
  width: 35rem;
  margin: 5rem auto;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2.5rem;

  @media ${mobile} {
  width: 100%;
    
  } 
`;

