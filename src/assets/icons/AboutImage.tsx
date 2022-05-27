import React from 'react'
import { FlexWrapper, Image } from 'components'
import styled from 'styled-components/macro'
import { mobile, tablet, theme } from 'styles/theme'

export const AboutImage:React.FC = () => (
<AboutImageStyles >
<Image src='freestyle' alt='swimming freestyle' width='25rem'/>
</AboutImageStyles>
)
 


const AboutImageStyles=styled(FlexWrapper)` 
border-radius: ${theme.radii.r10};
    picture{
        @media ${tablet}{
           display: none;
        }
        @media ${mobile}{
           display: none;
        }
    }
`