import React from 'react';
import ContentBox from '../../../../components/ContentBox';
import { Tabs } from 'antd';

// icons 
import { SolutionOutlined, CheckSquareOutlined } from '@ant-design/icons';
// Pages
import Permissions from './Permissions';
import { useParams } from 'react-router';
import ListFunctions from './ListFunctions';
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
              <SolutionOutlined />
              Funções
            </span>
          }
          key='1'
        >
          <ListFunctions />
        </TabPane>
        <TabPane tab={
          <span>
            <CheckSquareOutlined />
            Permissões
          </span>
        }
          key='2'
        >
          <Permissions />
        </TabPane>
      </Tabs>

    </ContentBox>
  );
}

export default Manage;