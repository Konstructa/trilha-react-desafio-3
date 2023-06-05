import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
`;