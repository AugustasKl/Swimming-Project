import React from "react";
import { BillingProps } from "constants/billing";
import styled from "styled-components/macro";
import { FlexWrapper, Image, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { theme } from "styles/theme";
import { Star } from "assets/icons";
import { borderRadius } from "styled-system";
import { StartNow } from "components/buttons/StartNow";

export const PricingItem: React.FC<BillingProps> = ({
  id,
  name,
  message,
  price,
  oldPrice,
  newPrice,
}) => {
  console.log(id, price);
  return (
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
        /day
        </FlexWrapper>
        <Typography fontSize="fs14">
          <del>${oldPrice}</del> &nbsp; <samp>${newPrice}</samp> billed every month
        </Typography>
        <StartNow>Start now (Save 25%)</StartNow>
      </FlexWrapper>
    </PricingItemStyles>
  );
};

const PricingItemStyles = styled(FlexWrapper)`
  /* flex-direction: row; */
  /* position: relative; */
    /* align-items: center; */
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
`;
