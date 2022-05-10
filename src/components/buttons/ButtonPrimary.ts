// import React from 'react'

import styled from "styled-components/macro";
import {  mobile, theme } from "styles/theme";
import { Button } from "./Button";



export const ButtonPrimary=styled(Button)`
background: ${theme.colors.black};
color:${theme.colors.white};
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
padding: 0.75rem 2rem;
border-radius: ${theme.radii.r10};
margin: ${({margin})=> margin || ''};
width: ${({width})=> width || ''};

cursor: pointer;

@media ${mobile} {
    text-align: center;
 
    
    }
`