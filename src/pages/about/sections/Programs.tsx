import React from "react";
import {Container, FlexWrapper, SectionWrapper, SliderComponent, Typography} from "components";
import { ProgramsItem } from "../elements";
import { SWIMMING_CLASSES } from "constants/swimmingClasses";
import { useQuery } from "styles/theme";


export const Programs: React.FC = () => {
  const { isMobile } = useQuery();
  const swimmingClasses = SWIMMING_CLASSES.map(
    ({enrolled, id, lessonCount, message, price, status, tag, title}) => (
      <ProgramsItem
      enrolled={enrolled}
      id={id}
      key={id}
      lessonCount={lessonCount}
      message={message}
      price={price}
      status={status}
      tag={tag}
      title={title}
      />
    )
  );
  return (
    <SectionWrapper>
      <Container>
        <Typography pb="s40" textAlign="center" type="h6">
          Swimclub provides these program plans
        </Typography>
        {isMobile ? (
          <SliderComponent mobileSlidesToScroll={1} mobileSlidesToShow={1}>
            {swimmingClasses}
          </SliderComponent>
        ) : (
          <FlexWrapper alignItems="center" gap="2.5rem">
            {swimmingClasses}
          </FlexWrapper>
        )}
      </Container>
    </SectionWrapper>
  );
};