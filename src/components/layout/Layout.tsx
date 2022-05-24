import React from 'react'
import { Box } from 'components'
import { Footer } from '.'
import { Header } from './header/Header'


export const Layout:React.FC = ({children}) => (
    <Box>
        <Header/>
        {children}
        <Footer/>
    </Box>
 
)

