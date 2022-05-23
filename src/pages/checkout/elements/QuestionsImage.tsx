import React from 'react'
import { FlexWrapper } from 'components'
import styled from 'styled-components/macro'
import { UniversalImages } from 'assets/icons'



export const QuestionsImage:React.FC = () => (
    <QuestionImageStyles>
        <UniversalImages tag='logo' width='20rem'/>
    </QuestionImageStyles>
  )



const QuestionImageStyles=styled(FlexWrapper)`
align-items: center;
justify-content: center;

width: 100%;

background: linear-gradient(134deg, #000f33 50%, #0747da 50%);
border-radius: 1.25rem 0 0 1.25rem;
`