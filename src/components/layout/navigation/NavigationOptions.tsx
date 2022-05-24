import React from "react";
import { FlexWrapper } from "components";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const NavigationOptions: React.FC = () => (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/checkout">Contact</Link>
      <Link to="/success">About us</Link>
    </HeaderWrapper>
  );


const HeaderWrapper = styled(FlexWrapper)`
  margin-right: 3rem;
  gap: 3rem;

  a {
    color: ${theme.colors.white};
    border-bottom: 3px solid transparent;
    font-size: 1.15rem;
    font-weight: ${theme.fontWeights.fw400};
    text-decoration: none;
  }
  a:hover {
    border-color: ${theme.colors.white};
  }
  a:active{
    border-color: ${theme.colors.heroBackground};
  }
`;
