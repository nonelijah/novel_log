import styled from 'styled-components';
import { Component } from 'react';

interface Props {
    readonly label: string;
    readonly onClick: () => void;
}

const Container = styled.button`
    border-radius: 10px;
`;

export class Button extends Component<Props> {
    render() {
        const { label, onClick } = this.props;
        return <Container onClick={onClick}>{label}</Container>;
    }
}
