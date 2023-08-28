import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  *:not(input,button) {
    text-transform: uppercase;
  }

  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
