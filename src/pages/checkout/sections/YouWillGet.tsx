import FallingDudeDemo from 'assets/icons/FallingDudeDemo'
import { FlexWrapper, SectionWrapper, Typography } from 'components'
import { ContainerSmall } from 'components/wrappers/ContainerSmall'
import Lists from 'listController/Lists'
import { AQUIRED_BENEFITS } from 'constants/acquiredBenefits'
import React from 'react'
import { mobile, useQuery } from 'styles/theme'
import styled from 'styled-components/macro'

export const YouWillGet:React.FC = () => {
  const {isMobile, isDesktop}=useQuery()
  return (
    <YouWillGetStyles>
        <ContainerSmall maxWidth='49.5rem'  >
            {isMobile ? "": <Typography type='h6' fontWeight="fw900" textAlign="center" paddingBottom="s32">What will You get:</Typography>}
            <FlexWrapper border="1px solid #ccc" padding={{_:'s4', desktop:'s20'}} borderRadius="r30" alignItems="flex-start"  flexDirection={{_:'column', desktop:'row'}} >
              <FallingDudeDemo/>
            {isMobile ? <Typography type='h6' fontWeight="fw900" paddingLeft="s40" paddingBottom="s16">What will You get:</Typography> : ''}
              <Lists columns='1' listItems={AQUIRED_BENEFITS} bullet="bullet"/>
            </FlexWrapper>
        </ContainerSmall>
    </YouWillGetStyles>
  )
}

const YouWillGetStyles =styled(SectionWrapper)`
    padding: 0 0 0 1.5rem ;
    @media ${mobile} {
    padding: 1rem 0.5rem;
}  
`
