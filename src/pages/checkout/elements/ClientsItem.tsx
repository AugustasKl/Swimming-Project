import { FlexWrapper, Image, Typography } from "components";
import React from "react";
import { ClientsProps } from "constants/clients";
import { RatingStars } from "assets/icons";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const ClientsItem: React.FC<ClientsProps> = ({
  id,
  client,
  level,
  country,
  message,
}) => {
  return (
    <ClientsItemStyles>
      <FlexWrapper gap="1rem" alignItems="center">
          <Image src={client} alt={client} width="4rem" height="4rem" />
        <FlexWrapper flexDirection='column'>
          <Typography fontWeight="fw600">{client}</Typography>
          <Typography fontSize="fs14" color="radioColor">{level}</Typography>
          <Typography fontSize="fs12">{country}</Typography>
        </FlexWrapper>
      </FlexWrapper>
        <RatingStars />
        <Typography>{message}</Typography>
    </ClientsItemStyles>
  );
};

const ClientsItemStyles = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: ${theme.radii.r20};
  padding: 1rem;
  height: 100%;
  width: 22rem;
  img{
    
    border-radius: ${theme.radii.r40};
  }
`;
