import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-size: 18px;
        font-size: 1.8rem;
        line-height: 1.5;
        font-family: "PT Sans", sans-serif;
    }

    h1, h2, h3 {
        margin: 0;
        line-height: 1.5;
    }

    h1, h2 {
        font-family: "Roboto", serif;
    }

    h3 {
        font-family: "PT Sans", sans-serif;
    }

    ul {
        list-style: none;
        margin: 0;
        padding:0;
    }
`

export default GlobalStyle