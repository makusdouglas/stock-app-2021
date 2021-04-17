import React from 'react';

import { Container, } from './styles';

const auth: React.FC = ({ children }) => {
    return (
        <Container>
                {children}
        </Container>
    );
}

export default auth;