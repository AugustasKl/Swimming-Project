import React from "react";
import { CLIENTS } from "constants/clients";
import { ClientsItem } from "../elements";
import { Container, SectionWrapper, SliderComponent,Typography} from "components";


export const Clients: React.FC = () => (
    <SectionWrapper>
      <Container>
        <Typography textAlign="center" type="h6" paddingY="s32">
          Hear success stories from our happy swimmers!
        </Typography>
        <SliderComponent slidesToScroll={1} slidesToShow={3} mobileSlidesToShow={1} mobileSlidesToScroll={1}>
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


