import styled from 'styled-components';

interface ContainerProps {
    readonly color: string;
}

const Container = styled.button<ContainerProps>`
    border-radius: 8px;
    min-width: 28px;
    padding: 8px 16px;
    color: var(--color-white);
    background-color: ${(props) => props.color};
`;

interface Props {
    readonly label: string;
    readonly color?: string;
    readonly onClick: () => void;
}

export const Button = ({ label, color = '#0D98BA', onClick }: Props) => {
    return (
        <Container color={color} onClick={onClick}>
            {label}
        </Container>
    );
};
