import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { Button } from "./Button";


export const BackButton=styled(Button)`
background: ${theme.colors.blue};
color: ${theme.colors.white};
text-align: center;
gap: 0.5rem;
padding: 0.75rem 2rem;
border-radius: ${theme.radii.r10};
width: 6rem;
cursor: pointer;
margin-top: 1rem;
/* font-size: 16px; */
`