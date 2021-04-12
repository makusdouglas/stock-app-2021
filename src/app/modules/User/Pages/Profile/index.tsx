import React from 'react';
import ContentBox from '../../../../components/ContentBox';
import { Tabs } from 'antd';

// icons 
import { UserOutlined } from '@ant-design/icons';
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
        Ajustes rápidos
      </span>
        }
          key={'0'}
        >
          <UserProfile />
        </TabPane>
        <TabPane
          tab={
            <span>
              <FaUserCog style={{ marginRight: 12 }} />
            Configurações de conta
            </span>
          }
          key='1'
        >
          <UserEditProfile />
        </TabPane>
      </Tabs>
    </ContentBox>
  );
}

export default Profile;