import React from 'react'
import {ContainerSmall, FlexWrapper } from 'components'
import { PlanBenefitsText } from '.'
import { SwimmingGirl } from 'assets/icons'



export const PlanBenefits:React.FC = () => (
    <ContainerSmall maxWidth='36.75rem'>
      <FlexWrapper justifyContent='center' gap='1.5rem'>
        <SwimmingGirl/>
        <PlanBenefitsText/>
      </FlexWrapper>
    </ContainerSmall>
)

