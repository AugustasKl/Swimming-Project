import React, { useState } from 'react'
import { Button } from './Button'
import { FlexWrapper, Image, SocialLinks } from 'components';
import { mobile, theme } from 'styles/theme';
import styled from 'styled-components/macro'

export const SocialButton:React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(true);
    const clickedHandler = () => {
        setClicked(!clicked);
    };
  return (
    <Button onClick={clickedHandler}>
        <StyledIcon>
            {clicked ? (
                <Image src='connect' alt='connect icon' width='2.5rem' />):
                (<FlexWrapper flexDirection='column' justifyContent="center" gap='1rem' height='100%'>
                    <Image src='arrow' alt='arrow' />
                    <SocialLinks/>
                </FlexWrapper>
            )}
        </StyledIcon>
    </Button>
  )
}

const StyledIcon=styled.image`
  position: absolute;
  
  top: 9.5%;
  left: 5%;
  
`