import React from 'react';
import { useAppSelector } from '@Store/hooks';
import { PageHeader, Table, Typography } from 'antd';

import { Container } from './styles';
const {Text} = Typography;
const columns = [
    {
        title: 'Grupo', dataIndex: 'name', key: 'name',
        render: (text: string) => {
              return <Text strong style={{color: '#1890ff'}}>{text}</Text>;
            }
    },
    {
        title: 'Descrição', dataIndex: 'description', key: 'description'
    }
]

const permColumns = [
    {
        title: 'Permissão', dataIndex: 'module', key: 'module'
    },
    {
        title: 'Descrição', dataIndex: 'description', key: 'description'
    }
]

const Permissions: React.FC = () => {
   const {roles} = useAppSelector(state => state.user);
  return (
      <Container>
          <PageHeader
                    // className="site-page-header"
                    // onBack={() => null}
                    title="Grupos e Permissões"
                    subTitle=""
                />
          <Table
            columns={columns}
            dataSource={roles}

            expandable={{
                expandedRowRender: record => (
                    <Table
                    pagination={false}
                    columns={permColumns}
                    dataSource={record.permissions}
                    />
                ),
                rowExpandable: record => record.permissions.length > 0,
              }}
          />
      </Container>
  );
}

export default Permissions;