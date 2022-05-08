import { Container, FlexWrapper, SectionWrapper, Typography } from 'components'
import { COMMUNITY } from 'constants/community'
import React from 'react'
import { CommunityItem } from '../elements/CommunityItem'

const Community:React.FC = () => {
  return (
    <SectionWrapper>
        <Container>
            <FlexWrapper flexDirection='column'>
            <Typography type='h6' textAlign='center' paddingY='s8'>Join the happy parents community</Typography>
            <Typography textAlign='center' paddingBottom='s32'>See how Play2Grow helps parents and their families</Typography>
            <FlexWrapper gap='2rem' flexDirection={{_:'column', desktop:'row'}}>

            {COMMUNITY.map(({id, percentage, text})=>(
                <CommunityItem
                id={id}
                key={id}
                percentage={percentage}
                text={text}
                />
                ))}
                </FlexWrapper>
                </FlexWrapper>
        </Container>
    </SectionWrapper>
  )
}

export default Community