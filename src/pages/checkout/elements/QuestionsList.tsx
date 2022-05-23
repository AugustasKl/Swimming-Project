import React from 'react'
import { Box, FlexWrapper, Typography } from 'components'
import { mobile, theme } from 'styles/theme'
import styled from 'styled-components/macro'
import { QUESTIONS } from 'constants/questions'
import { QuestionsItem } from './QuestionsItem'

export const QuestionsList:React.FC = () => (
    <QuestionsListStyles >
        <Typography color='white' fontWeight="fw900" textAlign='center' type='h6' py="s16">Any Questions? Find here.</Typography>
        <Box maxWidth='32rem' paddingX='s16'>
        <Typography color='white' textAlign='center'>These are most frequently asked questions. If you have one don't hesitate to contact us!</Typography>
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


const QuestionsListStyles=styled(FlexWrapper)`
    flex-direction: column;
    
    width: 100%;
    
    background: ${theme.colors.mainBackground};
    border-radius: 0 1.25rem 1.25rem 0;
    @media ${mobile} {
    border-radius: ${theme.radii.r20}
    }
`