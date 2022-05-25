import React from 'react'
import { FlexWrapper, Typography } from 'components'
import { theme } from 'styles/theme'
interface SummaryDetails{
    title:string,
    price:number
}

export const SummaryDetails:React.FC<SummaryDetails> = ({title, price}) => {
  return (
    <FlexWrapper borderBottom={`1px solid ${theme.colors.radioColor}`} justifyContent='space-between'>
        <Typography fontSize='fs20' fontWeight='fw600'>{title}</Typography>
        <Typography fontSize='fs20' fontWeight='fw600'>${price}</Typography>
    </FlexWrapper>
  )
}
