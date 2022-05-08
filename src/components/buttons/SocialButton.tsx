import { FlexWrapper, Image } from 'components';
import SocialLinks from 'components/layout/navigation/SocialLinks';
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { theme } from 'styles/theme';
import { Button } from './Button'

export const SocialButton:React.FC = () => {
    const [isClicked, setIsClicked] = useState<boolean>(true);

    const clickedHandler = () => {
        setIsClicked((prevState) => !prevState);
    };
  return (
    <Button onClick={clickedHandler}>
        <Styledicon>
            {isClicked ? (
                <Image src='connect' alt='connect icon' width='2.5rem' />):
                (<FlexWrapper flexDirection='column' justifyContent="center" gap='1rem'>
                    <Image src='arrow' alt='arrow' />
                    <SocialLinks/>
                </FlexWrapper>
            )}
        </Styledicon>
    </Button>
  )
}

const Styledicon=styled.image`
  position: absolute;
  top: 9.5%;
  left: 5%;
  /* background-color: ${theme.colors.sectionColor}; */
`