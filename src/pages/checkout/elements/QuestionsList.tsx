import { Box, FlexWrapper, Typography } from 'components'
import { QUESTIONS } from 'constants/questions'
import React from 'react'
import styled from 'styled-components/macro'
import { mobile, theme } from 'styles/theme'
import { QuestionsItem } from './QuestionsItem'

export const QuestionsList:React.FC = () => {
  return (
    <QuestionsListStyles >
        <Typography type='h6' fontWeight="fw900" color='white' textAlign='center'py="s16">Any Questions? Find here.</Typography>
        <Box maxWidth='32rem' paddingX='s16'>
        <Typography color='white' textAlign='center'>Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.</Typography>
        {QUESTIONS.map(({id, question, answer})=>(
          <QuestionsItem 
          id={id}
          key={id}
          question={question}
          answer={answer}
          />
          ))}
          </Box>
    </QuestionsListStyles>
  )
}

const QuestionsListStyles=styled(FlexWrapper)`
width: 100%;
    flex-direction: column;
    background: ${theme.colors.mainBackground};
   
  border-radius: 0 1.25rem 1.25rem 0;
  @media ${mobile} {
    border-radius: ${theme.radii.r20}
  }
`