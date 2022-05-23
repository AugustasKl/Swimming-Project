import React from "react";
import { FlexWrapper, Typography } from "components";
import { InstructorsProps } from "constants/swimInstructors";
import { mobile, theme } from "styles/theme";
import { Star, UniversalImages } from "assets/icons";
import { SocialButton } from "components/buttons";
import styled from "styled-components/macro";


export const InstructorsItem: React.FC<InstructorsProps> = ({
  experience,
  id,
  name,
  position,
  rating,
  tag
}) => (
    <InstructorStyles>
      <SocialButton/>
      <FlexWrapper
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        gap="0.5rem"
      >
        <UniversalImages height='20rem' tag={tag} width='100%' />
        <Typography fontSize="fs24" fontWeight="fw600" textAlign="center" >
          {name}
        </Typography>
        <Typography color="orange" fontSize="fs14" textAlign='center'>
          {position}
        </Typography>
        <Typography border="1px dotted #000" padding="s4">
          {experience} years of experience
        </Typography>
        <FlexWrapper gap="0.25rem">
        <Star/>
        <Typography fontWeight="fw600">5.00/{rating.toFixed(2)}</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </InstructorStyles>
  );




const InstructorStyles = styled.li`
  position: relative;

  padding: 3rem 0;

  width: 21rem;

  background: linear-gradient(#e7f9fd 0%, #e7f9fd 100%);
  border-radius: ${theme.radii.r20};
  list-style: none;
  
  img {
    border-radius: ${theme.radii.r10};
    margin-top: -4.3rem;
  }
  
  @media ${mobile} {
    display: none;
    :nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      display: list-item;
    }
  }
`;
