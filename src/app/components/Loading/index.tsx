import React from 'react';
import { Spin } from 'antd';
import { Container } from './styles';

const Loading: React.FC = () => {
    return (
        <Container>
            <Spin size="large" />
        </Container>
    );
}

export default Loading

