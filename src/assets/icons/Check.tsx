import { Image } from 'components'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components/macro'

export const Check:React.FC = () => {
  return (
    // <CheckStyles>
    <StaticImage src='./../svg/complete.svg' alt='complete logo' style={{width:'2rem', height:'2rem', marginRight:'1rem'}}/> 
    // </CheckStyles>
  )
}

const CheckStyles=styled.image`

`