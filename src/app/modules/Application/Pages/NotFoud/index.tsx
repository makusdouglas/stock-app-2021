import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Result } from 'antd';
import { Container } from './styles';

const NotFoud: React.FC = () => {
  return (
    <Container>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página solicitada não existe."
        extra={
          <Link to='home'>
            <Button type="primary" target='home'>
              Início
        </Button>
          </Link>
        }
      />
    </Container>
  );
}

export default NotFoud;
