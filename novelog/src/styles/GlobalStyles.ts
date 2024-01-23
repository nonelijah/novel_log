import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
${reset}

:root {
    /* font */
    --font-family: 'Pretendard', sans-serif
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
