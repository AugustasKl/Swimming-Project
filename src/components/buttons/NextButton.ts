import { Button } from "./Button";
import styled from "styled-components/macro";
import { theme } from "styles/theme";


export const NextButton=styled(Button)`
width: 95%;

padding: 0.75rem 2rem;
margin-top: 1rem;

background: ${theme.colors.heroBackground};
border-radius: ${theme.radii.r10};
color: ${theme.colors.white};
cursor: pointer;
font-size: 16px;
gap: 0.5rem;
text-align: center;
`