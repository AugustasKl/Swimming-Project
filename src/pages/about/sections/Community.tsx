import React from 'react'
import { COMMUNITY } from 'constants/community'
import { CommunityItem } from '../elements/CommunityItem'
import { Container, FlexWrapper, SectionWrapper, Typography } from 'components'

export const Community:React.FC = () => (
    <SectionWrapper>
        <Container>
            <FlexWrapper flexDirection='column'>
            <Typography paddingY='s8' textAlign='center' type='h6'>Join the our swimmers community!</Typography>
            <Typography paddingBottom='s32' textAlign='center'>See how Swimclub helps all kinds of swimmers to take their skills to another level!</Typography>
            <FlexWrapper flexDirection={{_:'column', desktop:'row'}} gap='2rem' >
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


