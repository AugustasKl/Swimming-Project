import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";




interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    display?:string;
    background?:string;
    backgroundColor?:string;
    borderRadius?:string;
    fontSize?:string;
    fontWeight?:string;
    isLoading?:boolean
    margin?:string;
    maxWidth?:string;
    minWidth?:string;
    onClick?:()=>void,
    padding?:string;
    position?:string;
    textAlign?:string
    width?:string;
}

export const Button:React.FC<ButtonProps>=({
    children,
    isLoading,
    onClick,
    ...rest
})=>(
<ButtonP disabled={isLoading} onClick={onClick} {...rest}>
    {isLoading? 'Loading... ' :children}
</ButtonP>
)

const ButtonP=styled.button<ButtonProps>`
    display: ${({display})=>display || ''};
    background:${({background})=>background|| ''};
    background-color:${({backgroundColor})=>backgroundColor|| ''};
    border: none;
    border-radius: ${({borderRadius})=> borderRadius || ''};
    color:${({color})=>color|| ''};
    cursor: pointer;
    font-family: ${theme.fontFamily.primary};
    font-size:${({fontSize})=>fontSize || ''};
    font-weight: ${({fontWeight})=> fontWeight || ''};
    margin:${({margin})=>margin || ''};
    min-width:${({minWidth})=>minWidth || ''};
    max-width:${({maxWidth})=>maxWidth || ''};
    padding:${({padding})=>padding || ''};
    position:${({position})=>position|| ''};
    text-align:${({textAlign})=>textAlign || 'center'};

    :disabled{
        cursor: not-allowed;
        opacity: 0.8;
    }
` 