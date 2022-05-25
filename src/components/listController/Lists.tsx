import React from "react";
import { Container, ContainerSmall, FlexWrapper, Typography } from "components";
import ListsItem from "./ListsItem";
import { mobile, useQuery } from "styles/theme";
import styled from "styled-components/macro";

interface ListProps {
  bullet: string;
  columns?: string;
  id?:string
  listItems: Array<ListItem>;
  mobileColumns?:string;
  title?: string;
}

interface ListItem  {
  id: string;
  text: string;
}

const Lists: React.FC<ListProps> = ({ columns,  bullet, listItems, mobileColumns, title }) => {
  const {isMobile}=useQuery()
  return (
    <Container>
        {title && <Typography
          fontSize="fs20"
          paddingX={{ _: "s24" }}
          paddingY={{ _: "s16", desktop: "s32" }}
          textAlign={{ _: "start", desktop: "center" }}
          type="h6"
        >
          {title}
        </Typography>}
        <ContainerSmall maxWidth="49.5rem">
          <FlexWrapper flexDirection="column" gap="0.5rem">
            <ListStyle columns={isMobile? mobileColumns : columns}>
              {listItems.map((item) => (
                <ListsItem key={item.id} bullet={bullet} text={item.text}  />
              ))}
            </ListStyle>
          </FlexWrapper>
        </ContainerSmall>
 
    </Container>
  );
};

export default Lists;

const ListStyle = styled.ul<{ columns?: string }>`
  height: 100%;
  
  padding: 0;
  
  columns: ${({ columns }) => (columns ? columns : "0")};
  column-gap: 1.5rem;

  @media ${mobile}{
    padding: 0;
    
    columns: ${({ columns }) => (columns ? columns : "1")};
  }
`;
