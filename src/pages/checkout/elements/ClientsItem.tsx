import { FlexWrapper, Image, SliderComponent, Typography } from "components";
import React from "react";
import { ClientsProps } from "constants/clients";
import { RatingStars } from "assets/icons";
import styled from "styled-components/macro";
import { mobile, theme, useQuery } from "styles/theme";


interface SliderProps extends ClientsProps {
  dots?:boolean
  infinite?:boolean,
  speed?:number,
  slidesToShow?:number,
  slidesToScroll?:number
}

export const ClientsItem: React.FC<SliderProps> = ({
  id,
  client,
  level,
  country,
  message,

}) => {
 

  const { isMobile } = useQuery();
  return (
  
      <ClientsItemStyles>
      <FlexWrapper gap="1rem" alignItems="center">
      <Image src={client} alt={client} width="4rem" height="4rem" />
      <FlexWrapper flexDirection="column">
      <Typography fontWeight="fw600">{client}</Typography>
      <Typography fontSize="fs14" color="radioColor">
      {level}
      </Typography>
      <Typography fontSize="fs12">{country}</Typography>
      </FlexWrapper>
      </FlexWrapper>
      <RatingStars />
      <Typography>{message}</Typography>
      </ClientsItemStyles>
      );
};

const ClientsItemStyles = styled(FlexWrapper)`
  gap: 0.25rem;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: ${theme.radii.r20};
  background: ${theme.colors.white};
  margin: 2.5rem 0.625rem;
  padding: 1rem;
  height: 100%;
  width: 20.5rem;
  img {
    border-radius: ${theme.radii.r40};
  }

  @media ${mobile} {
    width: 90%;
    
  }
`;
