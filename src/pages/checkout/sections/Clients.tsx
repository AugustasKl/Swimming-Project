import React from "react";
import { CLIENTS } from "constants/clients";
import { ClientsItem } from "../elements";
import { Container, SectionWrapper, SliderComponent,Typography} from "components";


export const Clients: React.FC = () => (
    <SectionWrapper>
      <Container>
        <Typography textAlign="center" type="h6" paddingY={{_:"s0",tablet:"s8",desktop:'s32'}}>
          Hear success stories from our happy swimmers!
        </Typography>
        <SliderComponent slidesToScroll={1} slidesToShow={3} mobileSlidesToScroll={1} mobileSlidesToShow={1} >
          {CLIENTS.map(({ id, client, country, level, message }) => (
            <ClientsItem
              id={id}
              key={id}
              client={client}
              country={country}
              level={level}
              message={message}
            />
          ))}
        </SliderComponent>
      </Container>
    </SectionWrapper>
  );


