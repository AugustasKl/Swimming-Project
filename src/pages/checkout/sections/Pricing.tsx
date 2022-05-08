import { Box, FlexWrapper, SectionWrapper, Typography } from "components";
import { ContainerSmall } from "components/wrappers/ContainerSmall";
import { BILLING_OPTIONS } from "constants/billing";
import React from "react";

import { BillingProps } from "constants/billing";
import { PricingItem } from "./../elements/PricingItem";
import { SafeCheckout } from "assets/icons";
import styled from "styled-components/macro";
import { mobile, theme, useQuery } from "styles/theme";
import { Link } from "gatsby";

// import { PricingItem } from "../elements";

export const Pricing: React.FC = () => {
  console.log("labas");
  const { isMobile } = useQuery();
  return (
    <SectionWrapper  background= 'linear-gradient(128deg, #000F33 65%, #0747DA 35%)'>
      <ContainerSmall maxWidth="49.5rem">
        <StyledPricing>
          <Typography type="h6" paddingBottom="s32" color="white">
            {isMobile ? "Choose your personal plan" : "Select billing option"}
          </Typography>
          <FlexWrapper
            flexDirection={{ _: "column", desktop: "row" }}
            gap="1rem"
          >
            {BILLING_OPTIONS.map(
              ({ id, name, message, price, oldPrice, newPrice }) => (
                <PricingItem
                  id={id}
                  key={id}
                  name={name}
                  message={message}
                  price={price}
                  oldPrice={oldPrice}
                  newPrice={newPrice}
                />
              )
            )}
          </FlexWrapper>
          <Box maxWidth={{ _: "70%", desktop: "100%" }}>
            <Typography textAlign="center" color="white" fontSize="fs14" paddingY="s32">
              By choosing a payment method you agree to the <a>T&Cs</a> and{" "}
              <a>Privacy Policy </a>{" "}
            </Typography>
          </Box>
          <SafeCheckout />
        </StyledPricing>
      </ContainerSmall>
    </SectionWrapper>
  );
};

const StyledPricing = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: center;
  a {
    color: ${theme.colors.blue};
    cursor: pointer;
  }
  @media ${mobile} {
    align-items: center;
    width: 100%;
  }
`;
