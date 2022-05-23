import React from "react";
import { ClientsProps } from "constants/clients";
import { FlexWrapper, Image, Typography } from "components";
import { mobile, theme, useQuery } from "styles/theme";
import { RatingStars } from "assets/icons";
import styled from "styled-components/macro";

interface SliderProps extends ClientsProps {
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
}

export const ClientsItem: React.FC<SliderProps> = ({
  client,
  country,
  level,
  message,
}) => (
  <ClientsItemStyles>
    <FlexWrapper alignItems="center" gap="1rem">
      <Image src={client} alt={client} height="4rem" width="4rem" />
      <FlexWrapper flexDirection="column">
        <Typography fontWeight="fw600">{client}</Typography>
        <Typography color="radioColor" fontSize="fs14">
          {level}
        </Typography>
        <Typography fontSize="fs12">{country}</Typography>
      </FlexWrapper>
    </FlexWrapper>
    <RatingStars />
    <Typography>{message}</Typography>
  </ClientsItemStyles>
);

const ClientsItemStyles = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;
  width: 20.5rem;

  padding: 1rem;
  margin: 2.5rem 0.625rem;

  gap: 0.25rem;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: ${theme.radii.r20};
  background: ${theme.colors.white};

  img {
    border-radius: ${theme.radii.r40};
  }

  @media ${mobile} {
    width: 90%;
  }
`;
