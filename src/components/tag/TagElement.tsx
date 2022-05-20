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
position: relative;
top:15%;
left: 5%;
`