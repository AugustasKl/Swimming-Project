import React from "react";
import { CLIENTS } from "constants/clients";
import { ClientsItem } from "../elements";
import { Container, SectionWrapper, SliderComponent,Typography} from "components";



export const Clients: React.FC = () => (
    <SectionWrapper  padding="1.5rem 1rem">
      <Container>
        <Typography textAlign="center" type="h6">
          Hear success stories from our happy swimmers!
        </Typography>
        <SliderComponent slidesToScroll={1} slidesToShow={3} tabletSlidesToScroll={1} tabletSlidesToShow={1} >
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

  
  

