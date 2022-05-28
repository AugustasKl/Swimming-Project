import React from "react";
import {
  Container,
  ContainerSmall,
  FlexWrapper,
  ListsItem,
  Typography,
} from "components";
import { tablet, useQuery } from "styles/theme";
import styled from "styled-components/macro";

interface ListProps {
  bullet: string;
  columns?: string;
  id?: string;
  listItems: Array<ListItem>;
  mobileColumns?: string;
  title?: string;
}

interface ListItem {
  id: string;
  text: string;
}

export const Lists: React.FC<ListProps> = ({
  bullet,
  columns,
  listItems,
  mobileColumns,
  title,
}) => {
  const { isMobile } = useQuery();
  return (
    <Container padding="0.15rem">
      {title && (
        <Typography
          fontSize="fs20"
          paddingX={{ _: "s24" }}
          paddingY={{ _: "s16", desktop: "s32" }}
          textAlign={{ _: "start", desktop: "center" }}
          type="h6"
        >
          {title}
        </Typography>
      )}
      <ContainerSmall maxWidth="49.5rem" padding="0">
        <FlexWrapper flexDirection="column" gap="0.5rem">
          <ListStyle columns={isMobile ? mobileColumns : columns}>
            {listItems.map((item) => (
              <ListsItem bullet={bullet} key={item.id} text={item.text} />
            ))}
          </ListStyle>
        </FlexWrapper>
      </ContainerSmall>
    </Container>
  );
};

const ListStyle = styled.ul<{ columns?: string }>`
  height: 100%;

  columns: ${({ columns }) => (columns ? columns : "0")};
  column-gap: 1.5rem;

  @media ${tablet} {
    padding: 0;
    columns: ${({ columns }) => (columns ? columns : "1")};
    column-gap: 0.2rem;
  }
`;
