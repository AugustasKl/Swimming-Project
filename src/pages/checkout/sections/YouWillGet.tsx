import React from "react";
import { AQUIRED_BENEFITS } from "constants/acquiredBenefits";
import {ContainerSmall, FlexWrapper, SectionWrapper, Typography } from "components";
import Lists from "components/listController/Lists";
import { mobile, tablet, theme, useQuery } from "styles/theme";
import styled from "styled-components/macro";
import { SwimmingPool } from "assets/icons";


export const YouWillGet: React.FC = () => {
  const { isMobile, isTablet } = useQuery();
  return (
    <YouWillGetStyles>
      <ContainerSmall maxWidth="49.5rem">
        {isMobile ? ("") : (<Typography fontWeight="fw900" paddingBottom="s32" textAlign="center" type="h6">
            What will You get:
          </Typography>
        )}
        <FlexWrapper
          alignItems={{tablet:'center',desktop:"flex-start"}}
          border={`1px solid ${theme.colors.radioColor}`}
          borderRadius="r30"
          flexDirection={{ _: "column", desktop: "row" }}
          padding={{ _: "s4", desktop: "s20" }}       
        >
         {!isTablet && <SwimmingPool/>}
        {isMobile && <SwimmingPool/>}
          {isMobile ? (
            <Typography
            fontWeight="fw900"
            paddingLeft="s40"
            paddingY="s16"
            type="h6"
            >
              What will You get:
            </Typography> ) : ("")}
          <Lists columns="1" bullet="bullet" listItems={AQUIRED_BENEFITS}/>
        </FlexWrapper>
      </ContainerSmall>
    </YouWillGetStyles>
  );
};

const YouWillGetStyles = styled(SectionWrapper)`
  padding-top:1.5rem;
  
  @media ${mobile} {
    padding: 1rem 0.5rem;
  }
`;
