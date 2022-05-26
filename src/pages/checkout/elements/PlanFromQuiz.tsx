import React from 'react'
import { Box, FlexWrapper, Typography } from 'components'
import styled from 'styled-components/macro'
import { theme } from 'styles/theme'

interface PlanFromQuizProps{
    enrolled:number;
    lessonCount:number;
    title:string
}

export const PlanFromQuiz:React.FC<PlanFromQuizProps> = ({enrolled, lessonCount,title }) => (
    <SelectedPlanStyles>
    <Typography fontSize='fs18' fontWeight='fw600'>You have been selected to:</Typography>
    <Box border={`1px solid ${theme.colors.radioColor}`} borderRadius='r20' paddingX={{_:'s32',desktop:'s64'}} paddingY='s20' textAlign='left'>         
    <Typography fontSize='fs18'>{title}!</Typography>
    <Typography fontSize='fs18'>You will be attending  <span>{lessonCount}</span> practices!</Typography>
    <Typography fontSize='fs18'>Yuo also will be training with <span>{enrolled}</span> teammates!</Typography>
    </Box>
    </SelectedPlanStyles>
)

const SelectedPlanStyles=styled(FlexWrapper)`
align-items: center;
flex-direction: column;
justify-content: center;

gap: 1rem;

span{
  color:${theme.colors.orange}  
}
`