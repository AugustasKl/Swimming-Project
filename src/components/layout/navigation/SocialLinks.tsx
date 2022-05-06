import { Image } from 'components'
import React from 'react'

const SocialLinks:React.FC = () =>  (
  <>
    <a href="https://facebook.com/">
      <Image src="facebook" alt="facebook" />
    </a>
    <a href="https://twitter.com/">
      <Image src="twitter" alt="twitter" />
    </a>
    <a href="https://instagram.com/">
      <Image src="instagram" alt="instagram" />
    </a>
  </>
)

export default SocialLinks