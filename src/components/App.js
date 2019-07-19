import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from '../assets/mui_theme';
import Life from './Life';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Life />
		</ThemeProvider>
	);
}

export default App;
