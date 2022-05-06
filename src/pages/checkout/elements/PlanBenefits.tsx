import DemoHeart from 'assets/icons/DemoHeart'
import { FlexWrapper } from 'components'
import { ContainerSmall } from 'components/wrappers/ContainerSmall'
import React from 'react'
import { PlanBenefitsText } from '.'


export const PlanBenefits:React.FC = () => {
  return (
    <ContainerSmall maxWidth='36.75rem'>
      <FlexWrapper gap='1.5rem'>
        <DemoHeart/>
        <PlanBenefitsText/>
      </FlexWrapper>
    </ContainerSmall>
  )
}

