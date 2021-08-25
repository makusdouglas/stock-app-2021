import React from 'react';
import ContentBox from '../../../../components/ContentBox';
import { Tabs } from 'antd';

// icons 
import { OrderedListOutlined, FormOutlined, TeamOutlined } from '@ant-design/icons';
// Pages
import TeamProfile from './TeamProfile';
import AddTeam from './AddTeam';
import { useParams } from 'react-router';
import ListTeams from './ListTeam';
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
            Definir Equipes
            </span>
          }
          key='1'
        >
          <AddTeam />
        </TabPane>
        <TabPane
          tab={
            <span>
              <OrderedListOutlined />
              Alocar seções/departamentos
            </span>
          }
          key='2'
        >
          <ListTeams/>
        </TabPane>
      </Tabs>

    </ContentBox>
  );
}

export default Manage;