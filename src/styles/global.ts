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
    background: ${({ theme }) => theme.blue_900};
    color: ${({ theme }) => theme.white_900};
    -webkit-font-smoothing: antialiased;
  }

  #root {
    width: 100%;
    max-width: 960px;

    height: 100vmin;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }


  body, input, button, textarea, select {
    font-family: 'Open Sans', sans-serif;
  }

  ul {
    list-style: none;
  }

  button,
  a {
    text-decoration: none;
    border: 0;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white_900};

    transition: all ease-in-out 0.3s;

    &:hover {
      filter: brightness(0.8);
    }

  }

  main {
    opacity: 1;
    transition: opacity .4s ease-in-out;
    animation: ${appearOpacity} 1s;
  }

  .Toastify__toast-body {
    > div {
      font-size: 1.6rem;
    }
  }
`;
