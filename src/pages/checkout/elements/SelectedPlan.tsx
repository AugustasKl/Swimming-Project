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
    <Box textAlign='left' border='1px solid #ccc' paddingY='s20' paddingX='s64' borderRadius='r20'>         
    <Typography fontSize='fs18'>{title}!</Typography>
    <Typography fontSize='fs18'>You will be attending  <samp>{lessonCount}</samp> practices!</Typography>
    <Typography fontSize='fs18'>Yuo also will be training with  <samp>{enrolled}</samp> teammates!</Typography>
    </Box>
    </SelectedPlanStyles>
  )
}

const SelectedPlanStyles=styled(FlexWrapper)`
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;

samp{
  color:${theme.colors.orange}
  
}
`