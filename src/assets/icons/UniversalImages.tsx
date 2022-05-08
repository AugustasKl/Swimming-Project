import { Image } from 'components'
import React from 'react'

const UniversalImages:React.FC<{tag:string}> = ({tag}) => {
  return (
    <Image src={tag} alt={tag} height='20rem' width='100%' />
  )
}

export default UniversalImages