import { Image } from 'components'
import React from 'react'
import styled from 'styled-components/macro'

export const UniversalImages:React.FC<{tag:string, height?:string, width?:string}> = ({tag, height, width}) => {
  return (
    //   <ImageStyle height={height} width={width}>

    <Image src={tag} alt={tag} height={height} width={width}/>
    //   </ImageStyle>
  )
}


const ImageStyle=styled.image<{}>`
    height: ${({height})=> height ? height : ''};
    width: ${({width})=> width? width : ''};

`