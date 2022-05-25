import { Button } from "./Button";
import styled from "styled-components/macro";
import {  mobile, theme } from "styles/theme";





export const ButtonPrimary=styled(Button)`

width: ${({width})=> width || ''}; 


padding: 0.75rem 2rem;
margin: ${({margin})=> margin || ''};

background: ${theme.colors.black};
border-radius: ${theme.radii.r10};
color:${theme.colors.white};
cursor: pointer;



@media ${mobile} {
    text-align: center;
    }
`