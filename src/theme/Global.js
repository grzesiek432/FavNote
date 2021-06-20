import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600');

    *,::after,::before {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    }


    html {
      font-size: 62.5%;
    }

    body{

        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem; //happy rems;
     
    }

`;

export default GlobalStyle;
