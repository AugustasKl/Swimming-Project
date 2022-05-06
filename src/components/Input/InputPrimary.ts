import styled from "styled-components/macro";
import { mobile, theme } from "styles/theme";
import { Input } from "./elements/Input";


export const InputPrimary = styled(Input)`
  padding: 1rem;
  background: ${theme.colors.white};
  border-radius: ${theme.radii.r10};
  border: none;
  width: 20rem;
  outline:none;
`;
