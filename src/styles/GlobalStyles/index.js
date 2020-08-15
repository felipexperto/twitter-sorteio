import { createGlobalStyle } from 'styled-components';
import theme from '../Theme';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  
  html {
    font-family: ${theme.main.fonts.family};
    font-size: ${theme.main.fonts.size};
  }

  body {
    background-color: ${({ backgroundColor }) => backgroundColor || theme.main.colors.white};
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
