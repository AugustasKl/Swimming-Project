import { Container, FlexWrapper, SectionWrapper, Typography } from 'components'
import { SWIMMING_CLASSES } from 'constants/swimmingClasses'
import React from 'react'
import { ProgramsItem } from '../elements'


export const Programs:React.FC = () => {
  return (
   <SectionWrapper>
       <Container>
           <Typography type='h6' textAlign='center'  pb="s40">Swimclub provides these program plans</Typography>
           <FlexWrapper gap='2.5rem' flexDirection={{_:'column', desktop:'row'}} alignItems='center'>
               {SWIMMING_CLASSES.map(({id, title, price, message, lessonCount, enrolled, tag,status})=>(
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
               ))}
           </FlexWrapper>
       </Container>
   </SectionWrapper>
  )
}

