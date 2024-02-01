import styled, { keyframes } from 'styled-components';

export const WelcomeContainer = styled.section`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dedede;
`;

export const WelcomeExplain = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: var(--color-gray-h);
`;

const slowShow = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

export const WelcomeTit = styled.strong`
    display: block;
    font-size: 2rem;
    color: var(--color-green);
    margin: 1rem;
    animation: ${slowShow} 3s;
`;
