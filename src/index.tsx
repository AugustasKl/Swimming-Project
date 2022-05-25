import React, { StrictMode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store/store';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { theme } from 'styles/theme';

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
		<Provider store={store}>
		<PersistGate persistor={persistor}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{element}
		</ThemeProvider>
		</PersistGate>
		</Provider>
	</StrictMode>
);
