import React from 'react';
import { Image } from 'antd'

import { Container } from './styles';

import LoadingLogo from '@Assets/images/logos/logoPetruz.gif';
const Loading: React.FC = () => {
    return (
        <Container>
            <Image
                width={80}
                preview={false}
                src={LoadingLogo}
            />
        </Container>
    );
}

export default Loading