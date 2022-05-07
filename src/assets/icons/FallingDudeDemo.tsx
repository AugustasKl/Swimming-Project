import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const FallingDudeDemo:React.FC = () => {
  return (
  <StaticImage
  src='./../images/FallingDude.png'
  alt='Demo falling dude img'
  style={{height:'100%'}}
  />
  )
}

export default FallingDudeDemo




