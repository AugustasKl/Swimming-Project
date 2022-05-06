import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Logo:React.FC = () => (

    <StaticImage 
    src='./../images/logo.png'
    alt='logo'
    style={{width:'3.5rem', height:'3.5rem'}}
    />
  )


export default Logo