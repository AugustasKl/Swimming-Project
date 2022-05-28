import React from 'react'
import { Image } from 'components'
import { SOCIAL_LINKS } from 'constants/socialLinksData'

export const SocialLinks:React.FC = () =>  (
  <>
  {SOCIAL_LINKS.map(({id, link, name})=>(
    <a href={link} key={id}>
    <Image src={name} alt={name} height="2rem" width='2rem'/>
  </a>
  ))}
  </>
)


