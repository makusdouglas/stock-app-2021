import React from 'react';

import { Container, LeftSider, RightSide } from './styles';

const SignInPage: React.FC = () => {
    return (
        <Container>
            <LeftSider span={14}>
                <h1>Petruz Fruity</h1>
            </LeftSider>
            <RightSide span={10}>
                <h1>Login</h1>
            </RightSide>
        </Container>
    );
}

export default SignInPage;