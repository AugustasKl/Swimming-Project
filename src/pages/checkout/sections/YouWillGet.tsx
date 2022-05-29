import React from "react";
import { AQUIRED_BENEFITS } from "constants/acquiredBenefits";
import {ContainerSmall, FlexWrapper,Lists, SectionWrapper, Typography } from "components";
import { SwimmingPool } from "assets/icons";
import { theme, useQuery } from "styles/theme";


export const YouWillGet: React.FC = () => {
  const { isMobile, isTablet } = useQuery();
  return (
    <SectionWrapper padding="1.5rem 1rem">
      <ContainerSmall maxWidth="49.5rem">
        {!isMobile && (<Typography fontWeight="fw900" paddingBottom="s16" textAlign="center" type="h6">
            What will You get:
          </Typography>
        )}
        <FlexWrapper
          alignItems={{tablet:'center', desktop:"flex-start"}}
          border={`1px solid ${theme.colors.radioColor}`}
          borderRadius="r30"
          flexDirection={{ _: "column", desktop: "row" }}
          padding={{ _: "s8", desktop: "s20" }}       
        >
         {!isTablet && <SwimmingPool/>}
         {isMobile && <SwimmingPool/>}
          {isMobile &&  <Typography fontWeight="fw900" paddingLeft="s40" paddingY="s16" type="h6">
              What will You get:
            </Typography>}
          <Lists columns="1" bullet="bullet" listItems={AQUIRED_BENEFITS}/>
        </FlexWrapper>
      </ContainerSmall>
    </SectionWrapper>
  );
};


