import React from 'react'
import { Box, Footer, Header } from 'components'




export const Layout:React.FC = ({children}) => (
    <Box>
        <Header/>
        {children}
        <Footer/>
    </Box>
 
)

