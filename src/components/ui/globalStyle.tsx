import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Times New Roman";
    min-height: 100vh;
    background-color: #e7e7e7;
  }
`