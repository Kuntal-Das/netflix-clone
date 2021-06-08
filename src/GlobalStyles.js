import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body{
    font-family:"Helvetica Neue",Helvetica,Arial, sans-serif;
    -webkit-font-smooting: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    background-color: black;
    color: whitesmoke;
    margin: 0;
    padding: 0;
  }
`;
