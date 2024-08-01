import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: transparent;
    color: #333;
    display: flex;
    flex-direction: column;
  }

  body {
    margin: 0;
  }
`;

