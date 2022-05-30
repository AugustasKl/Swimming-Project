import React from "react";
import { BillingProps } from "constants/billing";
import { FlexWrapper, Typography } from "components";
import { mobile, theme } from "styles/theme";
import { navigate } from "gatsby";
import { StartNowButton } from "components/buttons/StartNowButton";
import { setPrice } from "store/users/answers-slice";
import styled from "styled-components/macro";
import { useAppDispatch } from "store/store/store";

export const PricingItem: React.FC<BillingProps> = ({
  message,
  name,
  newPrice,
  oldPrice,
  price,
}) => {
  const dispatch=useAppDispatch()

  const paymentHandler=()=>{
    dispatch(setPrice(price))
    navigate('/success')
  }

  const payment= (price=== 800 ? <Typography fontSize="fs14"><del>${oldPrice}</del> &nbsp; <span>${newPrice}</span> billed every week</Typography> 
  : <Typography fontSize="fs14"> One time payment </Typography>)

return(
  <PricingItemStyles>
      <FlexWrapper alignItems="center" flexDirection="column" justifyContent="center">

        <FlexWrapper alignItems="center" gap="0.25rem" >
          <Typography fontWeight="fw700">{name}</Typography>
          <TypographyStyles hasMessage={message.includes('Most popular')} >
            {message}
          </TypographyStyles>
        </FlexWrapper>

        <FlexWrapper alignItems="center" gap="0.25rem">
        <Typography fontSize="fs24" fontWeight="fw900">${price}</Typography>
        /program
        </FlexWrapper>

        {payment}
        <StartNowButton onClick={paymentHandler}>
          Pay now! 
          </StartNowButton>

      </FlexWrapper>
    </PricingItemStyles>
  );
}


const PricingItemStyles = styled(FlexWrapper)`
  justify-content: center;
  
  height: 11.5rem;
  width: 24rem;
  
  padding: 1rem 0;
  
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.r20};

  span{color:${theme.colors.orange}}
  
  @media ${mobile} {
    width: 22rem;
  }
`;

const TypographyStyles=styled(Typography)<{hasMessage:boolean}>`
padding: 0.25rem;

border: ${({hasMessage})=> hasMessage === true ? `1px solid ${theme.colors.purple}` : `1px solid ${theme.colors.green}`};
border-radius: ${theme.radii.r10};
color: ${({hasMessage})=> hasMessage === true ? `${theme.colors.purple}` : `${theme.colors.green}`};
font-weight: ${theme.fontWeights.fw700};
`
