import { Confetti, UniversalImages } from 'assets/icons'
import Logo from 'assets/icons/Logo'
import { Container, FlexWrapper, SectionWrapper, Typography } from 'components'
import React from 'react'

export const SuccessSection:React.FC = () => {
  return (
    <SectionWrapper background="linear-gradient(128deg, #000f33 53.9%, #0747da 35%)">
        <Container>
            <FlexWrapper flexDirection='column' alignItems='center' >
                <Logo/>
                <Typography fontSize="fs40" fontWeight="fw700" paddingY='s48' color='white'>Thank you for your order</Typography>
                <UniversalImages tag='complete'/>
                <Confetti/>
            </FlexWrapper>
        </Container>
    </SectionWrapper>
  )
}

