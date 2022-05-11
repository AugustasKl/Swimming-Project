import { Lochte, Swimmers, UniversalImages } from 'assets/icons'
import { Box, FlexWrapper } from 'components'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components/macro'
import { theme } from 'styles/theme'

export const QuestionsImage:React.FC = () => {
  return (
    <QuestionImageStyles>
        {/* <Swimmers/>
        <Lochte/> */}
        {/* <StaticImage src='./../../../assets/svg/Logo.svg' alt='log'/> */}
        <UniversalImages tag='logo' width='20rem'/>
    </QuestionImageStyles>
  )
}


const QuestionImageStyles=styled(FlexWrapper)`
width: 100%;
background: linear-gradient(134deg, #000f33 50%, #0747da 50%);
/* background:  #000f33 50%; */ //maybe?
justify-content: center;
align-items: center;
border-radius: 1rem 0 0 1rem;

`