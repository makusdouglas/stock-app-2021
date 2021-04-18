import { Card, Descriptions, PageHeader, Row, Statistic, Table, Tag } from 'antd';
import React from 'react';

import { Container } from './styles';
import Title from 'antd/lib/typography/Title';
import CarrousselResults from '@App/components/Carrossel/carrouselResults';

const columns = [
  {
    title: 'Equipes',
    dataIndex: 'name',
    key: 'name',
    render: (text: boolean | React.ReactPortal | React.ReactChild | React.ReactFragment | null | undefined) => text,
  },
  {
    title: 'Conferência',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Valor Referência',
    dataIndex: 'sistem',
    key: 'sistem',
  },
  {
    title: 'Produto',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any[]) => (
      <>
        {tags.map(tag => {
          let color = 'green';
          if (tag === 'divergência') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Equipe 1',
    age: 32,
    sistem:32,
    address: 'Produto conferido',
    tags: ['válido'],
  },
  {
    key: '2',
    name: 'Equipe 2',
    age: 42,
    sistem:32,
    address: 'Produto conferido',
    tags: ['divergência'],
  },
  {
    key: '3',
    name: 'Equipe 3',
    age: 32,
    sistem: 32,
    address: 'Produto conferido',
    tags: ['válido'],
  },
];
const Home: React.FC = () => {
  return (
    <Container>
      <PageHeader
        className="site-page-header"
        // onBack={() => window.history.back()}
        title="Dashboard"
        subTitle="Resumo geral"
      // extra={[
      //   <Button key="3">Inventário</Button>,
      //   <Button key="2">Equipes</Button>,
      //   <Button key="1" type="primary">
      //     Relatórios
      // </Button>,
      // ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Empresa">Nome da empresa</Descriptions.Item>
          <Descriptions.Item label="CNPJ">
            421421
          </Descriptions.Item>
        </Descriptions>
        <Row>
          <Statistic title="Status" value="Divergente" />
          <Statistic
            title="Patrimônio"
            prefix="$"
            value={6129568.08}
            style={{
              margin: '0 32px',
            }}
          />
          <Statistic title="Balanço" prefix="$" value={3345.08} />
        </Row>
      </PageHeader>
      <br />
      <div >
        <Title level={4}>Maiores divergências</Title>
        <CarrousselResults />
        <Card
          style={{
            width: '100%',
            marginTop: 35
          }}
          title="Equipes e Resultados"
        >
          <Table columns={columns} dataSource={data} />
        </Card>
      </div>
    </Container>
  );
}

export default Home;