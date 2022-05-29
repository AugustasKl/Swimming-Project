import React from "react";
import { FlexWrapper, Image, Typography } from "components";
import { InstructorsProps } from "constants/swimInstructors";
import { Star } from "assets/icons";
import { SocialButton } from "components/buttons/SocialButton";
import styled from "styled-components/macro";
import {  tablet, theme } from "styles/theme";


export const InstructorsItem: React.FC<InstructorsProps> = ({
  experience,
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
        gap="0.5rem"
        justifyContent="center"
      >
        <Image src={tag} alt={tag} height='20rem' width='100%'/>
        <Typography fontSize="fs24" fontWeight="fw600" textAlign="center" >
          {name}
        </Typography>
        <Typography color="orange" fontSize="fs14" textAlign='center'>
          {position}
        </Typography>
        <Typography border={`1px dotted ${theme.colors.black}`} padding="s4">
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

  background: ${theme.backgrounds.card};
  border-radius: ${theme.radii.r20};
  list-style: none;
  
  img {
    border-radius: ${theme.radii.r10};
    margin-top: -4.3rem;
  }
  
  @media ${tablet} {
    display: none;
    :nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      display: list-item;
    }
  }
`;
