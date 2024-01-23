import styled from 'styled-components';

const HeaderContainer = styled.header`
    max-width: 100vw;
    min-height: 50px;
    max-height: 96px;
    padding: 8px 16px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--color-border-h);
`;

const PageName = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-black);
    flex-grow: 1;
`;

interface Props {
    label?: string;
}

export const Header = ({ label }: Props) => {
    return (
        <HeaderContainer>
            <h1 className="a11y-hidden">Novel Log</h1>
            {label && <PageName>{label}</PageName>}
        </HeaderContainer>
    );
};
