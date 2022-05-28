import React from "react";
import { FlexWrapper, Image, Typography } from "components";
import styled from "styled-components/macro";
import { tablet } from "styles/theme";

export const ListsItem: React.FC<{ text: string; bullet: string }> = ({
  text,
  bullet,
}) => (
    <ListStyles>
      <FlexWrapper alignItems="flex-start" gap="0.5rem">
        <Image src={bullet} alt="bullet points" />
        <Typography fontSize="fs14">{text}</Typography>
      </FlexWrapper>
    </ListStyles>
  );


const ListStyles = styled.li`
  list-style: none;
  line-height: 1.375rem;
  
  @media ${tablet} {
   width: 100%;
   line-height: 1.3rem;
   padding: 0.1rem 
  }
`;
