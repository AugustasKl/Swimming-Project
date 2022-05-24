import React, {useState } from "react";
import {Box,Container, FlexWrapper, GridWrapper, SectionWrapper, Typography} from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { InstructorsItem } from "../elements";
import {InstructorsProps, SWIMMING_INSTRUCTORS} from "constants/swimInstructors";



export const Instructors: React.FC = () => {
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
  };

  return (
    <SectionWrapper>
      <Container>
        <Typography textAlign="center" type="h6">
          Our Professional Instructors
        </Typography>
        <FlexWrapper
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Box maxWidth="28.25rem">
            <Typography color="radioColor" textAlign="center" fontSize="fs14" >
            Meet the coaches. Rigorously Trained. Fully Certified
            </Typography>
          </Box>
          <GridWrapper
            gap="2.5rem"
            gridTemplateColumns={{ _: "1fr", desktop: "repeat(3, 1fr)" }}
            marginTop="s48"
          >
            {renderSwimmingInstructors.map(({ experience, id, name, position, rating, tag }) => (
              <InstructorsItem
                id={id}
                key={id}
                experience={experience}
                name={name}
                position={position}
                rating={rating}
                tag={tag}
              />
            ))}
          </GridWrapper>
        <Box marginTop='s24'>
          <ButtonPrimary onClick={sortHandler}>Sort by Rating In {sortStatus? 'Ascending': 'Descending'} order</ButtonPrimary>
        </Box>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

