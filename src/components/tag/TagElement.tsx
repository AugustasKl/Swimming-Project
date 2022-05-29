import React from 'react'
import { Image } from 'components'
import styled from 'styled-components/macro'

export const TagElement:React.FC<{status:string}> = ({status}) =>(
        <StyledTag>
        <Image src={status} alt={status}/>
        </StyledTag>
  )

const StyledTag=styled.image`
position: absolute;

left: 34%;
top:45%;
`