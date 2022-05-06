import { FlexWrapper, SectionWrapper, Typography } from "components";
import { ContainerSmall } from "components/wrappers/ContainerSmall";
import { BILLING_OPTIONS } from "constants/billing";
import React from "react";

import { BillingProps } from "constants/billing";
import { PricingItem } from "./../elements/PricingItem";
import { SafeCheckout } from "assets/icons";

// import { PricingItem } from "../elements";



export const Pricing: React.FC = () => {
    console.log('labas')
  return (
    <SectionWrapper backgroundColor="sectionColor">
      <ContainerSmall maxWidth="49.5rem">
          <Typography type='h6' paddingBottom="s32" >Select billing option</Typography>
        <FlexWrapper justifyContent="center" gap="1rem" >  
            {BILLING_OPTIONS.map(({id, name, message, price, oldPrice, newPrice })=>(
                <PricingItem
                id={id}
                key={id}
                name={name}
                message={message}
                price={price}
                oldPrice={oldPrice}
                newPrice={newPrice}
                />
            ))}                 
        </FlexWrapper>
       <Typography textAlign='center' fontSize='fs14' paddingY="s32">By choosing a payment method you agree to the <a>T&Cs</a> and <a>Privacy Policy </a> </Typography>
       <SafeCheckout/>
      </ContainerSmall>
    </SectionWrapper>
  );
};
