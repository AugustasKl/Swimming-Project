import { FlexWrapper, Image } from 'components'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components/macro'
import { mobile } from 'styles/theme'

const HeroImageMobile:React.FC = () => (
<HeroImageMobileStyles   >
{/* <Image src='freestyle' alt='swimming freestyle' width='45rem'/> */}
<Image src='swimmingMobile' alt='swimming freestyle Mobile' />
{/* <StaticImage src='./../../../assets/images/swimmerStarting.jpeg' alt='swimmerStarting' style={{width:'484px', height:'609px'}}/> */}
{/* <StaticImage src='./../../../assets/images/swimmerStarting.jpeg' alt='swimmerStarting'/> */}
</HeroImageMobileStyles>
)
 
export default HeroImageMobile

const HeroImageMobileStyles=styled(FlexWrapper)`
    opacity: 0.8;
  
    

`