import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    /* border: 1px solid red; */
  }
  
  /* Works on Firefox */
  * {
    scrollbar-width: 0.5vw;
    scrollbar-color: #00d0ff70;
  }
  
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.5vw;
  }
  
  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #00d0ff70;
    border-radius: 20px;
    border: none;
  }
  
  html {
    width: 100vw;
  }

  body {
    background: #2d3239;
    font-size: 14px;
    color: #333;
    font-family: 'Inter';
    width: 100vw;
    overflow-x: hidden;
    height: fit-content;
  }
  `