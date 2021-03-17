import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const NotFoudPage: React.FC = () => {
  return (
    <Container> 
        <h1>404 Not Found</h1>
        <p>Page not Found, <Link to='home'>back to home</Link></p>
    </Container>
  );
}

export default NotFoudPage;