import { Button } from "./Button";
import styled from "styled-components/macro";
import {  mobile, theme } from "styles/theme";
import { BaseButton } from "./elements/BaseButton";




export const ButtonPrimary=styled(Button)`

background: ${theme.colors.black};
color:${theme.colors.white};
display: flex;
 justify-content: center;
 align-items: center; 
padding: 0.75rem 2rem;
border-radius: ${theme.radii.r10};
margin: ${({margin})=> margin || ''};
width: ${({width})=> width || ''}; 
cursor: pointer;

a{
    color: ${theme.colors.white};
    text-decoration: none;
 
  }

@media ${mobile} {
    text-align: center;
    }
`