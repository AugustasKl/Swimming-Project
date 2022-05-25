import { Button } from "./Button";
import {  mobile, theme } from "styles/theme";
import styled from "styled-components/macro";



export const StartNowButton=styled(Button)`
width: 20rem;

padding: 1rem 0;
margin: ${({margin})=> margin || '1rem 0 0 0'};

background-color: ${theme.colors.blue};
border-radius: ${theme.radii.r30};
color:${theme.colors.white};
cursor: pointer;
font-weight: ${theme.fontWeights.fw700};


@media ${mobile} {
    text-align: center;
    margin-top: 1rem;
    }
`