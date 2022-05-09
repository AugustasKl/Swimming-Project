import { FlexWrapper, Image } from 'components'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components/macro'
import { mobile } from 'styles/theme'

const AboutImage:React.FC = () => (
<AboutImageStyles   >
<Image src='freestyle' alt='swimming freestyle' width='25rem'/>
{/* <Image src='swimming' alt='swimming freestyle' /> */}
{/* <StaticImage src='./../../../assets/images/swimmerStarting.jpeg' alt='swimmerStarting' style={{width:'484px', height:'609px'}}/> */}
{/* <StaticImage src='./../../../assets/images/swimmerStarting.jpeg' alt='swimmerStarting' style={{width:'50%'}}/> */}
</AboutImageStyles>
)
 
export default AboutImage

const AboutImageStyles=styled(FlexWrapper)`
    /* opacity: 0.8; */
    picture{
        /* opacity: 0.6; */
        @media ${mobile}{
           display: none;
        }
    }

`