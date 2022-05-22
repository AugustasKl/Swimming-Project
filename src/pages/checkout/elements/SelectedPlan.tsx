import { Box, FlexWrapper, Typography } from 'components'
import { SWIMMING_CLASSES } from 'constants/swimmingClasses'
import React from 'react'
import styled from 'styled-components/macro'
import { theme } from 'styles/theme'

interface PlanProps{
    title:string,
    lessonCount:number,
    enrolled:number
}

export const SelectedPlan:React.FC<PlanProps> = ({title, lessonCount, enrolled}) => {
  return (
    <SelectedPlanStyles>
    <Typography fontSize='fs18' fontWeight='fw600'>You have been selected to:</Typography>
    <Box textAlign='left' border='1px solid #ccc' paddingY='s20' paddingX={{_:'s32',desktop:'s64'}} borderRadius='r20'>         
    <Typography fontSize='fs18'>{title}!</Typography>
    <Typography fontSize='fs18'>You will be attending  <span>{lessonCount}</span> practices!</Typography>
    <Typography fontSize='fs18'>Yuo also will be training with  <span>{enrolled}</span> teammates!</Typography>
    </Box>
    </SelectedPlanStyles>
  )
}

const SelectedPlanStyles=styled(FlexWrapper)`
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;

span{
  color:${theme.colors.orange}
  
}
`