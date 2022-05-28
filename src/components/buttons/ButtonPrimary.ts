import { Button } from "./Button";
import { mobile, tablet, theme } from "styles/theme";
import styled from "styled-components/macro";

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
    text-align: center;
    /* width: 45%; */
    :hover {
      background: ${theme.colors.black};
    }
}
  /* @media ${mobile} {
    width: 95%;
  } */
`;
