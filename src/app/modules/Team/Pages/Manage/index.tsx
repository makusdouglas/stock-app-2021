import React from 'react';
import ContentBox from '../../../../components/ContentBox';
import { Tabs } from 'antd';

// icons 
import { OrderedListOutlined, FormOutlined, TeamOutlined } from '@ant-design/icons';
// Pages
import UserProfile from './TeamProfile';
import UserEditProfile from './TeamEditProfile';
import { useParams } from 'react-router';
import ListCollaborators from './ListCollaborators';
const { TabPane } = Tabs;

const Manage: React.FC = () => {
  type routeParams = {
    tab: string
  }
  const { tab } = useParams<routeParams>();

  return (
    <ContentBox cProps={{ minHeight: 400 }}>
      <Tabs defaultActiveKey={tab} tabPosition={'left'} style={{ minHeight: 220 }}>
        <TabPane tab={
          <span>
            <TeamOutlined />
        Equipes Conferentes
      </span>
        }
          key={'0'}
        >
          <UserProfile />
        </TabPane>
        <TabPane
          tab={
            <span>
              <FormOutlined />
            Cadastrar Colaborador
            </span>
          }
          key='1'
        >
          <UserEditProfile />
        </TabPane>
        <TabPane
          tab={
            <span>
              <OrderedListOutlined />
              Lista de Colaboradores
            </span>
          }
          key='2'
        >
          <ListCollaborators/>
        </TabPane>
        {/* <TabPane
          tab={
            <span>
              <LockFilled /> 
            Senhas e Segurança
            </span>
          }
          key='3'
        >
          <h2>Senhas e Segurança</h2>
        </TabPane> */}
      </Tabs>

    </ContentBox>
  );
}

export default Manage;