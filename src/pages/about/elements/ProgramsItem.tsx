import React from "react";
import { ClassesProps } from "constants/swimmingClasses";
import { FlexWrapper, Typography } from "components";
import { mobile, theme, useQuery } from "styles/theme";
import styled from "styled-components/macro";
import { TagElement } from "components/tag/TagElement";
import { UniversalImages } from "assets/icons";


export const ProgramsItem: React.FC<ClassesProps> = ({
  lessonCount,
  message,
  price,
  status,
  tag,
  title
}) => {
  const {isMobile}=useQuery()
    return (
        <ProgramStyles>
            <TagElement status={status}/>
        <FlexWrapper flexDirection='column' gap="0.5rem" >
          <UniversalImages tag={tag}  width="21rem"/>
          <Typography  fontSize="fs24" fontWeight="fw700" paddingTop='s24'>{title}</Typography>
          <FlexWrapper alignItems='center' gap="0.25rem" justifyContent="center"> 
            <Typography color="blue" fontSize="fs24" fontWeight="fw900">
              ${price}
            </Typography>
            /Person
          </FlexWrapper>
        </FlexWrapper>
          <Typography>{message}</Typography>
          <FlexWrapper alignItems='center' borderTop='1px solid #ccc' gap="0.5rem" justifyContent='center' mt='s24' pt='s8'  >
          {isMobile ? '' :<UniversalImages tag='practice' width="0.75rem"/>}
            <Typography fontSize='fs20' fontWeight="fw500">{lessonCount} Practices</Typography>
          </FlexWrapper>
        </ProgramStyles>
      );
    };


const ProgramStyles = styled.li`
  position: relative;
  
  max-height: 27.5rem;
  width: 21rem;
  
  padding: 3rem 0;
  
  background: linear-gradient(#e7f9fd 0%, #e7f9fd 100%);
  border-radius: ${theme.radii.r10};
  list-style: none;
  text-align:center;
  img {
    margin-top: -4.3rem;
  }

  @media ${mobile} {
    margin: 0 auto; 
  }
`;
