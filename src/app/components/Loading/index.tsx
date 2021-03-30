import React from 'react';
import { Image } from 'antd'

import { Container } from './styles';

const Loading: React.FC = () => {
    return (
        <Container>
            <Image
                width={80}
                preview={false}
                src={`images/logos/logoPetruz.gif`}
            />
        </Container>
    );
}

export default Loading