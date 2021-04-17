import React from 'react';
import ContentBox from '../../../../components/ContentBox';
import { Tabs } from 'antd';

// icons 
import { UserOutlined, FormOutlined, BellFilled, LockFilled } from '@ant-design/icons';
import { FaUserCog } from 'react-icons/fa'
// Pages
import UserProfile from './UserProfile';
import UserEditProfile from './UserEditProfile';
import { useParams } from 'react-router';
const { TabPane } = Tabs;

const Profile: React.FC = () => {
  type routeParams = {
    tab: string
  }
  const { tab } = useParams<routeParams>();

  return (
    <ContentBox cProps={{ minHeight: 400 }}>
      <Tabs defaultActiveKey={tab} tabPosition={'left'} style={{ minHeight: 220 }}>
        <TabPane tab={
          <span>
            <UserOutlined />
        Meu perfil
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
            Editar perfil
            </span>
          }
          key='1'
        >
          <UserEditProfile />
        </TabPane>
        <TabPane
          tab={
            <span>
              <BellFilled /> 
            Notificações
            </span>
          }
          key='2'
        >
          <h2>Notificações</h2>
        </TabPane>
        <TabPane
          tab={
            <span>
              <LockFilled /> 
            Senhas e Segurança
            </span>
          }
          key='3'
        >
          <h2>Senhas e Segurança</h2>
        </TabPane>
      </Tabs>
      
    </ContentBox>
  );
}

export default Profile;