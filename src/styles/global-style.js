import { createGlobalStyle } from 'styled-components';
import typefaceLight from '@Static/fonts/DIN Next Rounded LT Pro Light.ttf';
import typefaceRegular from '@Static/fonts/DIN Next Rounded LT Pro Regular.ttf';
import typefaceMedium from '@Static/fonts/DIN Next Rounded LT Pro Medium.ttf';
import typefaceBold from '@Static/fonts/DIN Next Rounded LT Pro Bold.ttf';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
  /* Resetting Styles */
	${reset}
  /* Typeface */
	@font-face {
    font-family: DINNextRoundedLTPro;
    src: url(${typefaceLight}) format('truetype');
    font-weight: 300;
  }
	@font-face {
    font-family: DINNextRoundedLTPro;
    src: url(${typefaceRegular}) format('truetype');
    font-weight: 400;
  }
	@font-face {
    font-family: DINNextRoundedLTPro;
    src: url(${typefaceMedium}) format('truetype');
    font-weight: 500;
  }
	@font-face {
    font-family: DINNextRoundedLTPro;
    src: url(${typefaceBold}) format('truetype');
    font-weight: 700;
  }
  /* General */
	html{
		font-size: 16px;
	}
  body{
		font-family: DINNextRoundedLTPro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		font-size: 1em;
	}
`;

export default GlobalStyle;
