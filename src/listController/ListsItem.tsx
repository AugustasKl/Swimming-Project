import { Box, FlexWrapper, Image, Typography } from "components";
import React from "react";
import styled from "styled-components/macro";
import { mobile } from "styles/theme";

const ListsItem: React.FC<{ text: string; bullet: string }> = ({
  text,
  bullet,
}) => {

  return (
    <ListStyles>
      <FlexWrapper gap="0.5rem" alignItems="flex-start">
        <Image src={bullet} alt="bullet points" />
        <Typography fontSize="fs14">{text}</Typography>
      </FlexWrapper>
    </ListStyles>
  );
};

export default ListsItem;

const ListStyles = styled.li`
  list-style: none;
  line-height: 1.375rem;
  

  @media ${mobile} {
   padding: 0.5rem;
   width: 100%;
  }
`;
