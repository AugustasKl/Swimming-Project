import React, {useState } from "react";
import {Box, Container, FlexWrapper, GridWrapper, SectionWrapper, Typography} from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import {InstructorsItem } from "../elements";
import {InstructorsProps, SWIMMING_INSTRUCTORS} from "constants/swimInstructors";
import styled from "styled-components/macro";
import { tablet } from "styles/theme";



export const Instructors: React.FC = () => {
  const element=document.querySelector(GridWrapper)
  const [instructors, setInstructors] = useState<Array<InstructorsProps>>([]);
  const [sortStatus, setSortStatus] = useState<boolean>(true);
  const instructorsCopy =[...SWIMMING_INSTRUCTORS]
  const renderSwimmingInstructors =  instructors.length === 0 ? SWIMMING_INSTRUCTORS :instructors
  
 
  const sortHandler = () => {
    if (sortStatus) {
      const sorted = instructorsCopy.sort((a, b) => a.rating > b.rating ? 1 : -1);
      setInstructors(sorted);
      setSortStatus(!sortStatus);
    } else {
      const sorted = instructorsCopy.sort((a, b) => a.rating < b.rating ? 1 : -1);
      setInstructors(sorted);
      setSortStatus(!sortStatus);
    }
    element?.scrollIntoView({behavior: "smooth", inline:"end"});
  };

  return (
    <InstructorStyles>
      <Container>
        <Typography pb='s8' textAlign="center" type="h6">
          Our Professional Coaches
        </Typography>
        <FlexWrapper
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          >
          <Box maxWidth="28.25rem">
            <Typography  mb={{_:"s16", tablet:'s20', desktop:'s32'}} textAlign="center">
            Meet the coaches. Rigorously Trained. Fully Certified.
            </Typography>
          </Box>
          <GridWrapper
            gap="2.5rem"
            gridTemplateColumns={{ _: "1fr", desktop: "repeat(3, 1fr)"}}
            marginBottom='s24'
          >
            {renderSwimmingInstructors.map(({ experience, id, name, position, rating, tag }) => (
              <InstructorsItem
                experience={experience}
                id={id}
                key={id}
                name={name}
                position={position}
                rating={rating}
                tag={tag}
              />
            ))}
          </GridWrapper>
          <ButtonPrimary onClick={sortHandler}>Sort by Rating In {sortStatus? 'Ascending': 'Descending'} order</ButtonPrimary>
        </FlexWrapper>
      </Container>
    </InstructorStyles>
  );
};
 const InstructorStyles=styled(SectionWrapper)`
   @media ${tablet} {
    padding:1rem 0.5rem;
  }
 `
