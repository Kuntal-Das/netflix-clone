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

  *{box-sizing:border-box;}
    
  :root{
    font-size: 0.75rem;
    @media (min-width:600px){
        font-size:1rem;
    }
    --container-max-width: 1200px;
  }
`;
