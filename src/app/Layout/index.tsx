import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.less'
import { StyledLink } from '../components/HeaderComponent/styles';
import { useLocation } from 'react-router';
import { lighten } from 'polished';
import { FooterStyled, SiderStyled } from './styles';
import { Footer } from 'antd/lib/layout/layout';
// import { purple } from '@ant-design/colors'
// import { useTheme } from 'styled-components';
const { SubMenu } = Menu;
const { Header, Content, } = Layout;

const AppLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };
  // const theme = useTheme();
  const location = useLocation();
  return (
    <Layout >
      <SiderStyled width={200} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h1>{collapsed ? 'PTZ' : 'Petruz'}</h1>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </SiderStyled>
      <Layout>
        <Header className="header" style={{ padding: 0, backgroundColor: '#fff' }}>
          <Menu theme="light" mode="horizontal" className="site-layout-background" defaultSelectedKeys={[location.pathname]}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <Menu.Item key="/home" ><StyledLink to='/home' >Home</StyledLink></Menu.Item>
            <Menu.Item key="/profile" ><StyledLink to='/profile'>Profile</StyledLink></Menu.Item>
            <Menu.Item key="/profile" ><StyledLink to='/profile'>Profile</StyledLink></Menu.Item>
            <Menu.Item key="/profile" ><StyledLink to='/profile'>Profile</StyledLink></Menu.Item>
            <Menu.Item key="/profile" ><StyledLink to='/profile'>Profile</StyledLink></Menu.Item>
          </Menu>
        </Header>

        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {/* <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        > */}
          {children}
          {/* </Content> */}
          {/* <Footer title='Copyright @ 2021' /> */}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout;