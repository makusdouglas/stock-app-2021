import React from 'react';

import { Container, Box } from './styles';

const auth: React.FC = ({ children }) => {
    return (
        <Container>
            <Box>
                {children}
            </Box>
        </Container>
    );
}

export default auth;