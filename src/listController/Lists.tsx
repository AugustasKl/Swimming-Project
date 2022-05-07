import { Box, Container, FlexWrapper, Image, Typography } from "components";
import { ContainerSmall } from "components/wrappers/ContainerSmall";
import React from "react";
import ListsItem from "./ListsItem";
import { PlanProps } from "./../constants/personalPlan";
import { mobile, theme } from "styles/theme";
import styled from "styled-components/macro";

interface ListProps {
  title?: string;
  listItems: Array<object>;
  bullet: string;
  columns?: string;
}

const Lists: React.FC<ListProps> = ({ title, listItems, bullet, columns }) => {
  console.log(listItems)
  return (
    <Container>
     
        {title && <Typography
          textAlign={{ _: "start", desktop: "center" }}
          type="h6"
          paddingY={{ _: "s16", desktop: "s32" }}
          paddingX={{ _: "s24" }}
          fontSize="fs20"
        >
          {title}
        </Typography>}
        <ContainerSmall maxWidth="49.5rem">
          <FlexWrapper flexDirection="column" gap="0.5rem">
            <ListStyle columns={columns}>
              {listItems.map((item) => (
                <ListsItem key={item.id} text={item.text} bullet={bullet} />
              ))}
            </ListStyle>
          </FlexWrapper>
        </ContainerSmall>
 
    </Container>
  );
};

export default Lists;

const ListStyle = styled.ul<{ columns?: string }>`
  columns: ${({ columns }) => (columns ? columns : "0")};
  column-gap: 1.5rem;
  height: 100%;
  /* width: 100%; */
    padding: 0;
  @media ${mobile} {
    columns: 1;
    /* width: 19.5rem; */
    padding: 0;
  }
`;
