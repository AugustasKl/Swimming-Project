import { UniversalImages } from "assets/icons";
import { FlexWrapper, Typography } from "components";
import React from "react";
import { ClassesProps } from "constants/swimmingClasses";
import styled from "styled-components/macro";
import { mobile, theme, useQuery } from "styles/theme";
import { TagElement } from "components/tag/TagElement";



interface ProgramStylesProps {
    listStyle?: string;
    padding?: string;
    margin?: string;
    background?: string;
    borderRadius?: string;
    width?: string;
  }

export const ProgramsItem: React.FC<ClassesProps> = ({
  title,
  price,
  message,
  lessonCount,
  enrolled,
  tag,
  status
}) => {
  const {isMobile}=useQuery()
    return (
        <ProgramStyles>
            <TagElement status={status}/>
        <FlexWrapper flexDirection='column' gap="0.5rem" >
          <UniversalImages tag={tag}  width="21rem"/>
          <Typography fontWeight="fw700" fontSize="fs24" paddingTop='s24' >{title}</Typography>
          <FlexWrapper justifyContent="center" alignItems='center' gap="0.25rem"> 
            <Typography fontWeight="fw900" fontSize="fs24" color="blue">
              ${price}
            </Typography>
            /Person
          </FlexWrapper>
        </FlexWrapper>
          <Typography>{message}</Typography>
          <FlexWrapper justifyContent='center' alignItems='center' gap="0.5rem" borderTop='1px solid #ccc' mt='s24' pt='s8'  >
          {isMobile ? '' :<UniversalImages tag='practice' width="0.75rem"/>}
            <Typography fontSize='fs20' fontWeight="fw500">{lessonCount} Practices</Typography>
          </FlexWrapper>
        </ProgramStyles>
      );
    };


const ProgramStyles = styled.li<ProgramStylesProps>`
text-align:center;
  position: relative;
  padding: 3rem 0;
  width: 21rem;
  max-height: 27.5rem;
  background: linear-gradient(#e7f9fd 0%, #e7f9fd 100%);
  border-radius: ${theme.radii.r10};
  list-style: none;
  img {
    margin-top: -4.3rem;
  }

  @media ${mobile} {
margin: 0 auto;
 
   
  }
`;
