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
          <Typography
            border={
              message === "Most popular"
              ? "1px solid #9767BD"
              : "1px solid #00878A"
            }
            borderRadius="r10"
            color={message === "Most popular" ? "purple" : "green"}
            fontWeight="fw700"
            p="s4"
            >
            {message}
          </Typography>
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
