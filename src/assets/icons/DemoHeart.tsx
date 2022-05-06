import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const DemoHeart:React.FC = () => {
  return (
  <StaticImage
  src='./../images/demoHeart.png'
  alt='Demo heart img'
  style={{height:'100%'}}
  />
  )
}

export default DemoHeart