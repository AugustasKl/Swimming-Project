import React from 'react'
import { BenefitsProps } from 'typings/benefits'
import { FlexWrapper, Typography } from 'components'

export const PlanBenefitsTextItems:React.FC<BenefitsProps> = ({name, text}) => (
  <FlexWrapper flexDirection="column" maxHeight="11.875rem">
      <Typography  color='green' fontSize="fs20" type='h6' >{name}</Typography>
      <Typography fontSize="fs14">{text}</Typography>
  </FlexWrapper>
  )


