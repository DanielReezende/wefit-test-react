import { createGlobalStyle, keyframes } from "styled-components";

const appearOpacity = keyframes`
from {
  opacity: 0;

}

to {
  opacity: 1;
}
`;

export default createGlobalStyle`
  :root {
    --grey-900: #333333;
    --grey-500: #999999;
    --grey-200: #D9D9D9;
     
    --white-900: #FFFFFF; 

    --blue-900: #2F2E41; 
    --blue-500: #009EDD;

    --green-900: #039B00;  
    --border-radius: 4px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    background: var(--blue-900);
    color: var(--white-900);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    width: 100%;
    max-width: 960px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }


  body, input, button, textarea, select {
    font-family: 'Open Sans', sans-serif;
  }

  button,
  a {
    text-decoration: none;
    border: 0;
    outline: none;
    cursor: pointer;
    color: var(--white-900);

    transition: all ease-in-out 0.3s;

    &:hover {
      filter: brightness(0.8);
    }

    &:disabled {
      cursor: not-allowed;
      
      &:hover {
        filter: brightness(1);
      }
    }
  }

  main {
    opacity: 1;
    transition: opacity .4s ease-in-out;
    animation: ${appearOpacity} 1s;
  }
`;
