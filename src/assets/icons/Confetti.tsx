import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components/macro'
import { theme } from 'styles/theme'

export const Confetti:React.FC = () => {
  return (
    <ConfettiStyles>
        <StaticImage src='./../images/confetti.png' alt='confetti'/>
    </ConfettiStyles>
  )
}

const ConfettiStyles=styled.image`
    position: absolute;
    top: 20%;
    z-index: ${theme.zIndices.upperElement};
`
 