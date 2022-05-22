import {  UniversalImages } from 'assets/icons'
import Logo from 'assets/icons/Logo'
import { Box, Container, FlexWrapper, SectionWrapper, Typography } from 'components'
import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import styled from 'styled-components/macro'
import { mobile, useQuery } from 'styles/theme'



export const SuccessSection:React.FC = () => {
const{isMobile }=useQuery()

  return (
    <SuccessSectionsStyles>
        <Container>
            <FlexWrapper flexDirection='column' alignItems='center' >
                {isMobile?'' :<Logo/>}
                <Typography fontSize="fs40" fontWeight="fw700" paddingY={{_:'s48',desktop:'s48'}} color='white' textAlign='center'>Thank you for your order</Typography>
                {isMobile?'':  <UniversalImages tag='complete'/>}
            </FlexWrapper>
                <Confetti numberOfPieces={30} width={isMobile? 480:2000} />
        </Container>
    </SuccessSectionsStyles>
  )
}

const SuccessSectionsStyles=styled(FlexWrapper)`
  background: linear-gradient(128deg, #000f33 56.7%, #0747da 35%);
width:100%;
  @media ${mobile} {
    background: linear-gradient(128deg, #000f33 68.5%, #0747da 35%);
    
  }
`

