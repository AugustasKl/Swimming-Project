import React from "react";
import { BillingProps } from "constants/billing";
import { FlexWrapper, Typography } from "components";
import { Link } from "gatsby";
import { StartNow } from "components/buttons/StartNow";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const PricingItem: React.FC<BillingProps> = ({
  message,
  name,
  newPrice,
  oldPrice,
  price,
}) => {
  const payment= (price=== 800 ? <Typography fontSize="fs14"><del>${oldPrice}</del> &nbsp; <span>${newPrice}</span> billed every week</Typography> 
  : <Typography fontSize="fs14"> One time payment </Typography>)
return(
  <PricingItemStyles>
      <FlexWrapper alignItems="center" flexDirection="column" justifyContent="center" >
        <FlexWrapper gap="0.25rem" alignItems="center">
          <Typography fontWeight="fw700"> {name}</Typography>
          <TypographyStyles hasMessage={message.includes('Most popular')} >
            {message}
          </TypographyStyles>
        </FlexWrapper>
        <FlexWrapper alignItems="center" gap="0.25rem">
        <Typography fontSize="fs24" fontWeight="fw900">${price}</Typography>
        /program
        </FlexWrapper>
        {payment}
        <StartNow>
          <Link to='/success'>
          Start now (Save 25%)
          </Link>
          </StartNow>
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

  span{
      color:${theme.colors.orange}
  }
  a{
    color:${theme.colors.white};
    text-decoration: none;
  }
`;

const TypographyStyles=styled(Typography)<{hasMessage:boolean}>`
padding: 0.25rem;

border: ${({hasMessage})=> hasMessage === true ? `1px solid ${theme.colors.purple}` : `1px solid ${theme.colors.green}`};
border-radius: ${theme.radii.r10};
color: ${({hasMessage})=> hasMessage === true ? `${theme.colors.purple}` : `${theme.colors.green}`};
font-weight: ${theme.fontWeights.fw700};
`
