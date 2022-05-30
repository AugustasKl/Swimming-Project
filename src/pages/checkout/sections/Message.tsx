import React from "react";
import {ContainerSmall, FlexWrapper, SectionWrapper, Typography } from "components";
import { mobile, tablet, theme, useQuery } from "styles/theme";
import { Physician, PhysicianMobile } from "assets/icons";
import styled from "styled-components/macro";

export const Message: React.FC = () => {
    const {isMobile}=useQuery()
  return (
    <MessageStyles>
      <ContainerSmall maxWidth="36.75rem">

        <FlexWrapper
          alignItems='center'
          border={`1px solid ${theme.colors.radioColor}`}
          borderRadius="r20"
          gap="1rem"
          p={{_:"s8",desktop:"s32"}}
        >
          <FlexWrapper flexDirection="column">
            <Typography pb="s16"><q><i>93% of our swimmers significantly improve their techniques and achieve better results</i></q></Typography>
            <Typography fontWeight="fw700">Marc Hinton</Typography>
            <Typography fontSize="fs14">Head of strength & conditioning</Typography>
          </FlexWrapper>

          {isMobile? <PhysicianMobile/> :<Physician />}
        </FlexWrapper>
        
      </ContainerSmall>
    </MessageStyles>
  );
};

const MessageStyles =styled(SectionWrapper)`
    padding: 1.5rem 1rem;
    @media ${tablet} {
      width: 33rem;
      margin: 0 auto;
  }
    @media ${mobile} {
      width: 100%;   
  }
`