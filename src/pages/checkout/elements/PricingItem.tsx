import React from "react";
import { BillingProps } from "constants/billing";
import styled from "styled-components/macro";
import { FlexWrapper, Image, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { theme } from "styles/theme";
import { Star } from "assets/icons";
import { borderRadius } from "styled-system";
import { StartNow } from "components/buttons/StartNow";
import { Link } from "gatsby";

export const PricingItem: React.FC<BillingProps> = ({
  id,
  name,
  message,
  price,
  oldPrice,
  newPrice,
}) => (
    <PricingItemStyles>
      <FlexWrapper flexDirection="column" alignItems="center" justifyContent="center" >
        <FlexWrapper gap="0.25rem" alignItems="center">
          <Typography fontWeight="fw700"> {name}</Typography>
          <Typography
            p="s4"
            fontWeight="fw700"
            color={message === "Most popular" ? "purple" : "green"}
            borderRadius="r10"
            border={
              message === "Most popular"
                ? "1px solid #9767BD"
                : "1px solid #00878A"
            }>
            {message}
          </Typography>
        </FlexWrapper>
        <FlexWrapper alignItems="center" gap="0.25rem">
        <Typography fontWeight="fw900" fontSize="fs24">${price}</Typography>
        /program
        </FlexWrapper>
        {price=== 800 ? <Typography fontSize="fs14">
          (<del>${oldPrice}</del> &nbsp; <samp>${newPrice}</samp> billed every week)
        </Typography> : <Typography> One time payment </Typography>}
        <StartNow>
          <Link to='/success'>
          Start now (Save 25%)
          </Link>
          </StartNow>
      </FlexWrapper>
    </PricingItemStyles>
  );


const PricingItemStyles = styled(FlexWrapper)`
  justify-content: center;
  background-color: ${theme.colors.white};
  padding: 1rem 0;
  border-radius: ${theme.radii.r20};
  height: 11.5rem;
  width: 24rem;

  samp{
    font-family: ${theme.fontFamily.primary};
      color:${theme.colors.orange}
  }
  a{
    text-decoration: none;
    color:${theme.colors.white};
  }
  
 
`;
