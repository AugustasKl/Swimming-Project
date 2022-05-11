import { Physician, PhysicianMobile, UniversalImages } from "assets/icons";

import { FlexWrapper, SectionWrapper, Typography } from "components";
import { ContainerSmall } from "components/wrappers/ContainerSmall";
import React from "react";
import styled from "styled-components/macro";
import { mobile, useQuery } from "styles/theme";

export const Message: React.FC = () => {
    const {isMobile}=useQuery()
  return (
    <MessageStyles>
      <ContainerSmall maxWidth="36.75rem">
        <FlexWrapper
          alignItems={{_:"flex-start",desktop:"center"}}
          border="1px solid #ccc"
          p={{_:"s16",desktop:"s32"}}
          borderRadius="r20"
          gap="2rem"
        >
          <FlexWrapper flexDirection="column">
            <Typography pb="s16">‘’<i>87% patients significantly reduces anxiety by fallowing simple-guided steps’’</i></Typography>
            <Typography fontWeight="fw700">Christine Ellis</Typography>
            <Typography fontSize="fs14">Behavioural psychologist</Typography>
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