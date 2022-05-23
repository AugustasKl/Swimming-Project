import { Box } from "./Box";
import styled from "styled-components/macro";
import { tablet } from "styles/theme";

export const ContentWrapper = styled(Box)`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1rem;
  
  @media ${tablet} {
    max-width: 100%;
  }
`;