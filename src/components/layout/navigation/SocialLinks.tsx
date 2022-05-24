import React from 'react'
import { Image } from 'components'

export const SocialLinks:React.FC = () =>  (
  <>
    <a href="https://facebook.com/">
      <Image src="facebook" alt="facebook" height="2rem" width='2rem'/>
    </a>
    <a href="https://twitter.com/">
      <Image src="twitter" alt="twitter" height="2rem"  width='2rem'/>
    </a>
    <a href="https://instagram.com/">
      <Image src="instagram" alt="instagram" height="2rem"  width='2rem'/>
    </a>
  </>
)

