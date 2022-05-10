import {
  Container,
  FlexWrapper,
  SectionWrapper,
  SliderComponent,
  Typography,
} from "components";
import { SWIMMING_CLASSES } from "constants/swimmingClasses";
import React from "react";
import Slider from "react-slick";
import { useQuery } from "styles/theme";
import { ProgramsItem } from "../elements";

export const Programs: React.FC = () => {
  const { isMobile } = useQuery();
  const swimmingClasses = SWIMMING_CLASSES.map(
    ({ id, title, price, message, lessonCount, enrolled, tag, status }) => (
      <ProgramsItem
        id={id}
        key={id}
        title={title}
        price={price}
        message={message}
        lessonCount={lessonCount}
        enrolled={enrolled}
        tag={tag}
        status={status}
      />
    )
  );
  return (
    <SectionWrapper>
      <Container>
        <Typography type="h6" textAlign="center" pb="s40">
          Swimclub provides these program plans
        </Typography>
        {isMobile ? (
          <SliderComponent mobileSlidesToScroll={1} mobileSlidesToShow={1}>
            {swimmingClasses}
          </SliderComponent>
        ) : (
          <FlexWrapper gap="2.5rem" alignItems="center">
            {swimmingClasses}
          </FlexWrapper>
        )}
      </Container>
    </SectionWrapper>
  );
};
