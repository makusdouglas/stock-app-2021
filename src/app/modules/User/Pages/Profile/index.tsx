import React from 'react';
import ContentBox from '../../../../components/ContentBox';
import { PageHeader, Tabs, Grid } from 'antd';

// icons 
import { UserOutlined, FormOutlined, BellFilled, LockFilled, SafetyCertificateOutlined } from '@ant-design/icons';
// Pages
import UserProfile from './UserProfile';
import UserEditProfile from './UserEditProfile';
import { useParams } from 'react-router';
import Permissions from '../Permissions';
const { TabPane } = Tabs;
const {useBreakpoint} = Grid;

const Profile: React.FC = () => {
  type routeParams = {
    tab: string
  }
  const screens = useBreakpoint();
  const breakpoints = Object.entries(screens).filter(sc => !!sc[1]);

  const { tab } = useParams<routeParams>();
  
  return (
    <ContentBox cProps={{ minHeight: 400 }}>
      <Tabs defaultActiveKey={tab} tabPosition={breakpoints.length < 3? 'top' : 'left'} style={{ minHeight: 220 }}>
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
              <SafetyCertificateOutlined/>
              Grupos e permissões
            </span>
          }
          key={'1'}
        >
          <Permissions/>
        </TabPane>
        {/* <TabPane
          tab={
            <span>
              <FormOutlined /> 
            Editar perfil
            </span>
          }
          key='1'
        >
          <UserEditProfile />
        </TabPane> */}
        <TabPane
          tab={
            <span>
              <BellFilled /> 
            Notificações
            </span>
          }
          key='2'
        >
          <PageHeader
                    // className="site-page-header"
                    // onBack={() => null}
                    title="Notificações"
                    subTitle="Aqui estão suas notificações mais recentes"
                />
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
          <PageHeader
                    // className="site-page-header"
                    // onBack={() => null}
                    title="Senhas e Segurança"
                    subTitle=""
                />
        </TabPane>
      </Tabs>
      
    </ContentBox>
  );
}

export default Profile;