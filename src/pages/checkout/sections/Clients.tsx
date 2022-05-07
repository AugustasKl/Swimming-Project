import { Container, FlexWrapper, SectionWrapper, Typography } from 'components'
import { CLIENTS } from 'constants/clients'
import React from 'react'
import { ClientsItem } from '../elements'


export const Clients:React.FC = () => {
  return (
    <SectionWrapper>
        <Container>
            <Typography type='h6' textAlign="center" paddingY="s32">Hear success stories from our happy swimmers!</Typography>
            <FlexWrapper gap='2rem'>
              {CLIENTS.map(({id, client, level, country, message})=>(
                <ClientsItem
                id={id}
                key={id}
                client={client}
                level={level}
                country={country}
                message={message}
                />
              ))}
            </FlexWrapper>
        </Container>
    </SectionWrapper>
  )
}

