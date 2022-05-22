import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { Button } from "./Button";


export const NextButton=styled(Button)`
background: ${theme.colors.heroBackground};
color: ${theme.colors.white};
text-align: center;
gap: 0.5rem;
padding: 0.75rem 2rem;
border-radius: ${theme.radii.r10};
width: 95%;
cursor: pointer;
margin-top: 1rem;
font-size: 16px;
`