import React from "react";
import { FlexWrapper } from "components";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import { tablet, theme } from "styles/theme";

export const NavigationOptions: React.FC = () => (
    <HeaderWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="#">Contact</Link>
      <Link to="#">Services</Link>
    </HeaderWrapper>
  );


const HeaderWrapper = styled(FlexWrapper)`

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
  @media ${tablet} {
  margin-top: 1.5rem;
}
`;
