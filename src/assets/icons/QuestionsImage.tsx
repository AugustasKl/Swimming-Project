import React from 'react'
import { FlexWrapper, Image } from 'components'
import styled from 'styled-components/macro'
import { theme } from 'styles/theme'




export const QuestionsImage:React.FC = () => (
    <QuestionImageStyles>
        <Image src='logo' alt='swimmer freestyle' width='20rem'/>
    </QuestionImageStyles>
  )



const QuestionImageStyles=styled(FlexWrapper)`
align-items: center;
justify-content: center;

width: 100%;

background: ${theme.backgrounds.footerMobile};
border-radius: 1.25rem 0 0 1.25rem;
`