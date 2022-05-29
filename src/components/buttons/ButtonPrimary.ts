import { Button } from "./Button";
import styled from "styled-components/macro";
import {tablet, theme } from "styles/theme";

export const ButtonPrimary = styled(Button)`
  width: ${({ width }) => width || ""};

  padding: 0.75rem 2rem;
  margin: ${({ margin }) => margin || ""};

  background: ${theme.colors.black};
  border-radius: ${theme.radii.r10};
  color: ${theme.colors.white};
  cursor: pointer;

  :hover {
    background: ${theme.colors.blue};
  }

  @media ${tablet} {
    :hover {
      background: ${theme.colors.black};
    }
}
`;
