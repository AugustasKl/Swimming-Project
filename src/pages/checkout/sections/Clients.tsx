import React from "react";
import { CLIENTS } from "constants/clients";
import { ClientsItem } from "../elements";
import { Container, SectionWrapper, SliderComponent,Typography} from "components";
import styled from "styled-components/macro";


export const Clients: React.FC = () => (
    <SectionWrapper>
      <Container>
        <Typography textAlign="center" type="h6" >
          Hear success stories from our happy swimmers!
        </Typography>
        <SliderComponent slidesToScroll={1} slidesToShow={3} mobileSlidesToScroll={1} mobileSlidesToShow={1} >
          {CLIENTS.map(({client, country, id, level, message }) => (
            <ClientsItem
            client={client}
            country={country}
            id={id}
            key={id}
            level={level}
            message={message}
            />
          ))}
        </SliderComponent>
      </Container>
    </SectionWrapper>
  );

  
  

