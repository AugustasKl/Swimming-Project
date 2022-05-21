import { UniversalImages } from 'assets/icons'
import React from 'react'
import styled from 'styled-components/macro'

export const TagElement:React.FC<{status:string}> = ({status}) => {
  const tagArray=['starter', 'intermediate', 'professional']
  // tagArray.map((tag)=>(
  //     console.log(tag)
  // ))
    return (
    <>

        <StyledTag>
        <UniversalImages tag={status}/>
        </StyledTag>
   
    </>
  )
}

const StyledTag=styled.image`
position: absolute;
top:45%;
left: 35%;
`