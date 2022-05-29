import React from "react";
import {Container, FlexWrapper, SectionWrapper, SliderComponent, Typography} from "components";
import { ProgramsItem } from "../elements";
import { SWIMMING_CLASSES } from "constants/swimmingClasses";
import { useQuery } from "styles/theme";



export const Programs: React.FC = () => {
  const { isTablet } = useQuery();
  const swimmingPrograms = SWIMMING_CLASSES.map(
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
        <Typography pb={{_:'s16', desktop:'s40'}} textAlign="center" type="h6">
          Swimclub provides these program plans
        </Typography>
        {isTablet? (
          <SliderComponent tabletSlidesToScroll={1} tabletSlidesToShow={1}>
            {swimmingPrograms}
          </SliderComponent>
        ) : (
          <FlexWrapper alignItems="center" gap="2.5rem"> 
            {swimmingPrograms}
          </FlexWrapper>
        )}
      </Container>
    </SectionWrapper>
  );
};
