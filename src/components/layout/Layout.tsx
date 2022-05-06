import { Box } from 'components'
import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout:React.FC = ({children}) => (
    <Box>
        <Header/>
        {children}
        <Footer/>
    </Box>
 
)

export default Layout