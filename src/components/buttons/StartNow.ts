// import React from 'react'

import styled from "styled-components/macro";
import {  mobile, theme } from "styles/theme";
import { Button } from "./Button";



export const StartNow=styled(Button)`
background: ${theme.colors.blue};
color:${theme.colors.white};
font-weight: ${theme.fontWeights.fw700};
padding: 1rem 0;
border-radius: ${theme.radii.r30};
width: 20rem;
margin: ${({margin})=> margin || '1rem 0 0 0 '};
cursor: pointer;

@media ${mobile} {
    text-align: center;
    /* width: 50%; */
    margin-top: 2rem;
    
    }
`