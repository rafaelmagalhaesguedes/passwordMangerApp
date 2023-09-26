import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto , sans-serif;
  }

  body {
    background: rgba(39, 42, 55, 1);
  }
  
  .valid-password-check {
    color: #aeffb6;
  }
  
  .invalid-password-check {
    color: #f58989;
  }
`;
