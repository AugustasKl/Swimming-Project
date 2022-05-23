import { FlexWrapper, Image } from 'components';
import SocialLinks from 'components/layout/navigation/SocialLinks';
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { mobile, theme } from 'styles/theme';
import { Button } from './Button'

export const SocialButton:React.FC = () => {
    const [isClicked, setIsClicked] = useState<boolean>(true);

    const clickedHandler = () => {
        setIsClicked((prevState) => !prevState);
    };
  return (
    <Button onClick={clickedHandler}>
        <StyledIcon>
            {isClicked ? (
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