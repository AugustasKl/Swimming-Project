import React from "react";
import { COMMUNITY } from "constants/community";
import { CommunityItem } from "../elements/CommunityItem";
import { Container, FlexWrapper, SectionWrapper, Typography } from "components";
import { mobile, tablet } from "styles/theme";
import styled from "styled-components/macro";

export const Community: React.FC = () => (
  <CommunityStyles>
    <Container>
      <FlexWrapper flexDirection="column">
        <Typography paddingY="s8" textAlign="center" type="h6">
          Join our swimmers community!
        </Typography>
        <Typography paddingBottom="s32" textAlign="center">
          See how Swimclub helps all kinds of swimmers to take their skills to
          another level!
        </Typography>
        <FlexWrapper
          flexDirection={{ _: "column", desktop: "row" }}
          gap="1.5rem"
        >
          {COMMUNITY.map(({ id, percentage, text }) => (
            <CommunityItem
              id={id}
              key={id}
              percentage={percentage}
              text={text}
            />
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </CommunityStyles>
);

const CommunityStyles = styled(SectionWrapper)`
  @media ${tablet} {
    padding: 1rem 1.5rem;
  }
  @media ${mobile} {
    padding: 2rem 0.5rem;
  }
`;
