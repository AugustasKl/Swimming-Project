import React from "react";
import { FlexWrapper, Image, Typography } from "components";
import { mobile } from "styles/theme";
import styled from "styled-components/macro";

const ListsItem: React.FC<{ text: string; bullet: string }> = ({
  text,
  bullet,
}) => {

  return (
    <ListStyles>
      <FlexWrapper alignItems="flex-start" gap="0.5rem">
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
   width: 100%;
   
   padding: 0.5rem;
  }
`;
