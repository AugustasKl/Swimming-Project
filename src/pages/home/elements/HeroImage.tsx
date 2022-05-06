import { FlexWrapper, Image } from 'components'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components/macro'
import { mobile } from 'styles/theme'

const HeroImage:React.FC = () => (
<HeroImageStyles  width="100%" >
<Image src='freestyle' alt='swimming freestyle' width='45rem'/>
</HeroImageStyles>
)
 
export default HeroImage

const HeroImageStyles=styled(FlexWrapper)`
    picture{
        /* opacity: 0.6; */
        @media ${mobile}{
            width:100%
        }
    }

`