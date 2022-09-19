import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  /* Works on Firefox */
  * {
    scrollbar-width: 8px;
    scrollbar-color: #00d0ff70;
  }
  
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }
  
  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #00d0ff70;
    border-radius: 20px;
    border: none;
  }
  
  body {
    background: #2d3239;
    font-size: 14px;
    color: #333;
    font-family: 'Inter';
    width: 100%;
  }
  `