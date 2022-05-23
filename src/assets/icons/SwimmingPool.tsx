import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components/macro'
import { mobile, theme } from 'styles/theme'
import { Image } from 'components'

export const SwimmingPool:React.FC = () => {
  return (
  
    <StaticImage
  src='./../images/FallingDude.png'
  alt='Demo falling dude img'
  style={{height:'100%'}}
  />

  )
}






