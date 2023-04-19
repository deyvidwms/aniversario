import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .vsc-controller {
    display: none !important;
  }
`;
