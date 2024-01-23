import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
${reset}

:root {
    /* color */
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-orange: #e69f00;
    --color-skyblue: #56B4E9;
    --color-green: #0D98BA;
    --color-yellow: #F0E442;
    --color-blue: #0072B2;
    --color-vermilion: #D55E00;
    --color-pink: #CC79A7;
    --color-border-b: #767676;
    --color-border-h: #C4C4C4;
    --color-bg: #F2F2F2

    /* font */
    --font-family: 'Pretendard', sans-serif;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    border: 0;
    background: none;
    font-family: var(--font-family);
}

button:enabled {
    cursor: pointer;
    opacity: 0.8;
}

button:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
}

body {
    font-family: var(--font-family);
}

input {
    border: none;
    font-family: var(--font-family);
}

.a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}

`;

export default GlobalStyle;
