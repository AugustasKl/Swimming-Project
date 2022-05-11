import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const DemoHeart:React.FC = () => {
  return (
  <StaticImage
  src='./../images/swimmingGirl.jpg'
  alt='Demo heart img'
  style={{height:'19.9375rem',width:'17.625rem', borderRadius:'50px'}}
  />
  )
}

export default DemoHeart




