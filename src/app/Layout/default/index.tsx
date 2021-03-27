import React, { useEffect, useState } from 'react';

import { Layout, Menu, Breadcrumb, Divider } from 'antd';
import {
  
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.less'
import { StyledLink } from '../../components/HeaderComponent/styles';
import { useLocation } from 'react-router';
import { MenuTitle, SiderStyled } from './styles';
import { Footer } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
// import { purple } from '@ant-design/colors'
// import { useTheme } from 'styled-components';
const { SubMenu } = Menu;
const { Header, Content, } = Layout;

const DefaultLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);
  const [menuText, setMenuText] = useState<string>(collapsed ? 'MENU' : 'MENU PRINCIPAL');
  const [title, setTitle] = useState<string>(collapsed ? 'PTZ' : 'Petruz Web')

  const toggle = () => {
    setCollapsed(!collapsed)
  };
  // const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (collapsed) {
      setMenuText('MENU');
      setIsCollapsed(true);
      setTitle('PTZ');
    } else {
      setTimeout(() => {
        setMenuText('MENU PRINCIPAL');
        setIsCollapsed(false);
        setTitle('Petruz Web');
      }, 100);
    }
  }, [collapsed])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderStyled width={200} trigger={null} collapsible collapsed={collapsed} onCollapse={(coll => setCollapsed(coll))}>
        <div className="logo">
          <h1>{title}</h1>
        </div>
        {/* <Divider style={{ borderColor: '#444', margin: 0 }} /> */}
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
        >
          <MenuTitle collapsed={isCollapsed}>
            <h4>{menuText}</h4>
          </MenuTitle>
          <Menu.Item key="sub1" icon={<DashboardOutlined />}>
            <Link to='/dashboard'>Dashboard</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
            <Menu.ItemGroup key="g1" title="Dashboard">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </Menu.ItemGroup>
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
          <Menu theme="light" mode="horizontal" className="site-layout-background" defaultSelectedKeys={[location.pathname]} >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <Menu.Item key="/home" ><StyledLink to='/home' >Home</StyledLink></Menu.Item>
            <Divider type="vertical" />
            <Menu.Item key="/profile" ><StyledLink to='/profile'>Profile</StyledLink></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer style={{ textAlign: 'right' }}>Petruz WEb App ©2021 Created by Petruz Fruity - v1.4</Footer>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout;