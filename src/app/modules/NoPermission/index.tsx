import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const NoPermission: React.FC = () => {
  return (
    <Container>
      <Result
        status="403"
        title="Sem permissão"
        subTitle="Você não posssui acesso ao recurso solicitado, Entre em contato com o suporte"
        extra={
          <Link to='home'>
            <Button type="primary" target='home'>
              Início
          </Button>
          </Link>
        }
      >
      </Result>
    </Container>
  );
}

export default NoPermission;
