import React from "react";
import {ContainerSmall, FlexWrapper, SectionWrapper, Typography } from "components";
import { Physician, PhysicianMobile } from "assets/icons";
import styled from "styled-components/macro";
import { mobile, theme, useQuery } from "styles/theme";

export const Message: React.FC = () => {
    const {isMobile}=useQuery()
  return (
    <MessageStyles>
      <ContainerSmall maxWidth="36.75rem">
        <FlexWrapper
          alignItems={{_:"center",desktop:"center"}}
          border={`1px solid ${theme.colors.radioColor}`}
          borderRadius="r20"
          gap="2rem"
          p={{_:"s16",desktop:"s32"}}
        >
          <FlexWrapper flexDirection="column">
            <Typography pb="s16">‘’<i>93% of our swimmers significantly improve their techniques and achieve better results’’</i></Typography>
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
    padding: 1.5rem 0;

    @media ${mobile} {
    margin: 0 0.5rem;
  }
`