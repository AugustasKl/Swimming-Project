import {
  Container,
  FlexWrapper,
  GridWrapper,
  SectionWrapper,
  SliderComponent,
  Typography,
} from "components";
import { CLIENTS } from "constants/clients";
import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "styles/theme";
import { ClientsItem } from "../elements";

export const Clients: React.FC = () => {
  const { isMobile } = useQuery();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <SectionWrapper>
      <Container>
        <Typography type="h6" textAlign="center" paddingY="s32">
          Hear success stories from our happy swimmers!
        </Typography>
        <SliderComponent slidesToScroll={1} slidesToShow={3} mobileSlidesToShow={1} mobileSlidesToScroll={1}>
          {CLIENTS.map(({ id, client, level, country, message }) => (
            <ClientsItem
              id={id}
              key={id}
              client={client}
              level={level}
              country={country}
              message={message}
            />
          ))}
        </SliderComponent>
      </Container>
    </SectionWrapper>
  );
};

