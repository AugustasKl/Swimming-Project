import { Box, Container, FlexWrapper, GridWrapper, SectionWrapper, Typography } from 'components'
import { SWIMMING_INSTRUCTORS } from 'constants/swimInstructors'
import React from 'react'
import InstructorsItem from '../elements/InstructorsItem'



export const Instructors:React.FC = () => {
  return (
    <SectionWrapper>
        <Container>
            <Typography type='h6' textAlign="center">Our Professional Instructors</Typography>
            <FlexWrapper justifyContent='center' flexDirection="column" alignItems="center">
            <Box maxWidth="28.25rem">
                <Typography textAlign='center' fontSize="fs14" color="radioColor">
                Progress tracking sheet, that helps you fallow your achievements and see your improvement
                </Typography>
                </Box>
            <GridWrapper gridTemplateColumns={{_:'1fr', desktop:"repeat(3, 1fr)"}} gap='2.5rem' marginTop='s48'  >
            {SWIMMING_INSTRUCTORS.map(({id, name, position, experience, rating, tag})=>(
                <InstructorsItem
                id={id}
                key={id}
                name={name}
                position={position}
                experience={experience}
                rating={rating}
                tag={tag}
                />
                ))}
            </GridWrapper>
            </FlexWrapper>
        </Container>
    </SectionWrapper>
  )
}

