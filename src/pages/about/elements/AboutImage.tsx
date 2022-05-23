import React from 'react'
import { FlexWrapper, Image } from 'components'
import styled from 'styled-components/macro'
import { mobile } from 'styles/theme'

export const AboutImage:React.FC = () => (
<AboutImageStyles >
<Image src='freestyle' alt='swimming freestyle' width='25rem'/>
</AboutImageStyles>
)
 


const AboutImageStyles=styled(FlexWrapper)` 
    picture{
        @media ${mobile}{
           display: none;
        }
    }
`