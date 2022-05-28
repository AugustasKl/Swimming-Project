import { Button } from "./Button";
import styled from "styled-components/macro";
import {tablet, theme } from "styles/theme";


export const BackButton=styled(Button)`
width: 6rem;

padding: 0.75rem 2rem;
margin-top: 1rem;

background: ${theme.colors.blue};
border-radius: ${theme.radii.r10};
color: ${theme.colors.white};
cursor: pointer;
gap: 0.5rem;
text-align: center;

:hover{ 
background:${theme.colors.white};
color:${theme.colors.backgroundSecondary};
}

@media ${tablet} {
   padding: 0.5rem 1rem;
   width: 4rem;
  }
`