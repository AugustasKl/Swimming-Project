import React from "react";
import { InstructorsProps } from "constants/swimInstructors";
import { FlexWrapper, Typography } from "components";
import UniversalImages from "assets/icons/UniversalImages";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { Star } from "assets/icons";
import { SocialButton } from "components/buttons";

interface InstructorsStylesProps {
  listStyle?: string;
  padding?: string;
  margin?: string;
  background?: string;
  borderRadius?: string;
  width?: string;
}
// interface InstructorsProps extends InstructorsStylesProps {}

const InstructorsItem: React.FC<InstructorsProps> = ({
  id,
  name,
  experience,
  position,
  rating,
  tag
}) => {
  return (
    <InstructorStyles>
      <SocialButton/>
      <FlexWrapper
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
      >
        <UniversalImages tag={tag} />
        <Typography fontWeight="fw600" textAlign="center" fontSize="fs24">
          {name}
        </Typography>
        <Typography color="orange" fontSize="fs14">
          {position}
        </Typography>
        <Typography border="1px dotted #000" padding="s4">
          {experience} years of experience
        </Typography>
        <FlexWrapper gap="0.25rem">
        <Star/>
        <Typography fontWeight="fw600">5.0/{rating}</Typography>
        </FlexWrapper>
      </FlexWrapper>
    </InstructorStyles>
  );
};

export default InstructorsItem;

const InstructorStyles = styled.li<InstructorsStylesProps>`
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
`;
