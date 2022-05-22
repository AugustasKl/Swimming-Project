import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { Statuses } from "typings/generalTypes";



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    backgroundColor?:string;
    display?:string;
    minWidth?:string;
    maxWidth?:string;
    background?:string;
    width?:string;
    borderRadius?:string;
    padding?:string;
    position?:string;
    margin?:string;
    fontSize?:string;
    fontWeight?:string;
    textAlign?:string
    onClick?:()=>void,
    isLoading?:boolean

}

export const Button:React.FC<ButtonProps>=({
onClick,
children,
isLoading,
...rest
})=>(
<ButtonP onClick={onClick} disabled={isLoading} {...rest}>
    {isLoading? 'Loading... ' :children}
</ButtonP>
)

const ButtonP=styled.button<ButtonProps>`
    display: ${({display})=>display || ''};
    margin:${({margin})=>margin || ''};
    padding:${({padding})=>padding || ''};
    text-align:${({textAlign})=>textAlign || 'center'};
    max-width:${({maxWidth})=>maxWidth || ''};
    min-width:${({minWidth})=>minWidth || ''};
    font-size:${({fontSize})=>fontSize || ''};
    font-weight: ${({fontWeight})=> fontWeight || ''};
    font-family: ${theme.fontFamily.primary};
    color:${({color})=>color|| ''};
    position:${({position})=>position|| ''};
    background:${({background})=>background|| ''};
    background-color:${({backgroundColor})=>backgroundColor|| ''};
    border-radius: ${({borderRadius})=> borderRadius || ''};
    border: none;
    
    cursor: pointer;
    :disabled{
        cursor: not-allowed;
        opacity: 0.8;
    }


` 