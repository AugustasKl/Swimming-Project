import { FlexWrapper, Image } from 'components'
import React from 'react'
import styled from 'styled-components/macro'

export const SafeCheckout:React.FC = () => (
    <CheckoutStyles>
        <Image src='safecheckout' alt='safe checkout'  />
    </CheckoutStyles>
)


const CheckoutStyles=styled(FlexWrapper)`
justify-content: center;

img{
    
    padding: 0.25rem;
    background: white;
}
;
`
