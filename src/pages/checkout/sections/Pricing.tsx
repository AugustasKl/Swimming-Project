import React from "react";
import { BILLING_OPTIONS } from "constants/billing";
import { Box, ContainerSmall, FlexWrapper, SectionWrapper, Typography } from "components";
import { PricingItem } from "../elements";
import { SafeCheckout } from "assets/icons";
import styled from "styled-components/macro";
import { tablet, theme, useQuery } from "styles/theme";


export const Pricing: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <SectionWrapper  background={theme.backgrounds.findRightProgram}>
      <ContainerSmall maxWidth="49.5rem">
        <StyledPricing>
          <Typography color="white" fontFamily={theme.fontFamily.secondary} paddingBottom="s32" type="h6">
            {isMobile ? "Choose your personal plan" : "Select billing option"}
          </Typography>
          <FlexWrapper
            flexDirection={{ _: "column", desktop: "row" }}
            gap="1rem"
          >
            {BILLING_OPTIONS.map(
              ({ id, message, name, newPrice, oldPrice, price}) => (
                <PricingItem
                  id={id}
                  key={id}
                  message={message}
                  name={name}
                  newPrice={newPrice}
                  oldPrice={oldPrice}
                  price={price}
                />
              )
            )}
          </FlexWrapper>
          <Box maxWidth={{ _: "70%", desktop: "100%" }}>
            <Typography color="white" fontSize="fs14" paddingY="s32" textAlign="center">
              By choosing a payment method you agree to the <a>T&Cs</a> and <a>Privacy Policy </a>
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
  
  a{
    color: ${theme.colors.orange};
    cursor: pointer;
  }
  @media ${tablet} {
    align-items: center;
    width: 100%;
  }
`;
