import { FlexWrapper } from "components";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

const NavigationOptions: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/checkout">Contact</Link>
      <Link to="/about">About us</Link>
    </HeaderWrapper>
  );
};

export default NavigationOptions;

const HeaderWrapper = styled(FlexWrapper)`
  gap: 3rem;
  a {
    color: ${theme.colors.black};
    text-decoration: none;
    font-weight: ${theme.fontWeights.fw400};
    border-bottom: 3px solid transparent;
  }
  a:hover {
    border-color: ${theme.colors.black};
  }
  a:active{
    border-color: ${theme.colors.heroBackground};
  }
`;
