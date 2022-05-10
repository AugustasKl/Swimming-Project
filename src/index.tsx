import React, { StrictMode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { theme } from 'styles/theme';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0
}
body {

    overflow: hidden auto;
}
html {
    font-family: ${theme.fontFamily.primary};
}
`;

export const wrapRootElement = ({ element }: any) => (
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{element}
		</ThemeProvider>
	</StrictMode>
);
