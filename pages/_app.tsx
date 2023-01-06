import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html,
body {
  font-family: 'Quicksand', sans-serif;
	overflow-x: hidden;
}
`;

const theme = {
	// colors
	"--wasabi-white": "#FFFFFF",
	"--wasabi-gray-50": "#F8F9FB",
	"--wasabi-gray-100": "#F0F4F8",
	"--wasabi-blue-50": "#0079D2",
	"--wasabi-blue-100": "#062A54",
	"--wasabi-blue-200": "#0B2F59",
	"--wasabi-black-50": "#CDD4DD",
	"--wasabi-black-100": "#8796A7",
	// utils
	"--wasabi-max-width": "1200px",
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
