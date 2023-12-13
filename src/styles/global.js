import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100%;
  }
  #root {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 40vh;
  }
  body {
    padding: 0;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(180deg, #d3d3da 0%, #d4d9e7 100%);
}

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};

    * {
    text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

 
  }
`;
