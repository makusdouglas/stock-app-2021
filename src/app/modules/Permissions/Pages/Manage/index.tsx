import React from 'react';
import ContentBox from '../../../../components/ContentBox';
import { Tabs } from 'antd';

// icons 
import { OrderedListOutlined, FormOutlined, TeamOutlined } from '@ant-design/icons';
// Pages
import UserProfile from './Permissions';
import AddCollaborator from './AddFunction';
import { useParams } from 'react-router';
import ListCollaborators from './ListFunctions';
const { TabPane } = Tabs;

const Manage: React.FC = () => {
  type routeParams = {
    tab: string
  }
  const { tab } = useParams<routeParams>();

  return (
    <ContentBox cProps={{ minHeight: 400 }}>
      <Tabs defaultActiveKey={tab} tabPosition={'left'} style={{ minHeight: 220 }}>
        <TabPane
          tab={
            <span>
              <FormOutlined />
              Cadastrar Função
            </span>
          }
          key='1'
        >
          <AddCollaborator />
        </TabPane>
        <TabPane
          tab={
            <span>
              <OrderedListOutlined />
              Funções Cadastradas
            </span>
          }
          key='2'
        >
          <ListCollaborators />
        </TabPane>
        <TabPane tab={
          <span>
            <TeamOutlined />
            Permissões
          </span>
        }
          key='3'
        >
          <UserProfile />
        </TabPane>
      </Tabs>

    </ContentBox>
  );
}

export default Manage;