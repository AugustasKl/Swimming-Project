import React from 'react'
import styled from 'styled-components/macro'
import { UniversalImages } from 'assets/icons'

export const TagElement:React.FC<{status:string}> = ({status}) =>(
    <>
        <StyledTag>
        <UniversalImages tag={status}/>
        </StyledTag>
    </>
  )

const StyledTag=styled.image`
position: absolute;

top:45%;
left: 35%;
`