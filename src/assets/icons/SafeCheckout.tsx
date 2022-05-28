import React from "react";
import { FlexWrapper, Image } from "components";
import { mobile } from "styles/theme";
import styled from "styled-components/macro";

export const SafeCheckout: React.FC = () => (
  <CheckoutStyles>
    <Image src="safecheckout" alt="safe checkout" />
  </CheckoutStyles>
);

const CheckoutStyles = styled(FlexWrapper)`
  justify-content: center;

  img {
    padding: 0.25rem;
    background: white;
  }
  @media ${mobile} {
    img {
      height: 3rem;
    }
  } ;
`;
