import React from 'react'
import { FlexWrapper } from 'components'
import styled from 'styled-components/macro'
import { theme } from 'styles/theme'
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

background: ${theme.backgrounds.footerMobile};
border-radius: 1.25rem 0 0 1.25rem;
`