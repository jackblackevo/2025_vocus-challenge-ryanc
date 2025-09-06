'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    touch-action: manipulation;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.8rem;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
