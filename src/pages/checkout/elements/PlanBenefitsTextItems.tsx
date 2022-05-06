import { FlexWrapper, Typography } from 'components'
import React from 'react'
import { BenefitsProps } from 'typings/benefits'

export const PlanBenefitsTextItems:React.FC<BenefitsProps> = ({name, text}) => {
  return (
  <FlexWrapper flexDirection="column" maxHeight="11.875rem">
      <Typography type='h6' color='green' fontSize="fs20" >{name}</Typography>
      <Typography fontSize="fs14">{text}</Typography>
  </FlexWrapper>
  )
}

