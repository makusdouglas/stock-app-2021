import React, { useEffect, useState } from 'react';

import { Layout, Menu, Breadcrumb, Divider, Avatar, Badge, Popover, Space } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,

} from '@ant-design/icons';
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';
import { GiFactory } from 'react-icons/gi';

import './index.less'
import { StyledLink } from '../../components/HeaderComponent/styles';
import { useLocation } from 'react-router';
import { SiderStyled, StyledSpace } from './styles';
import { Footer } from 'antd/lib/layout/layout';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { requestUserData } from '../../features/user/slice';
import Loading from '../../components/Loading';
import { BodyPopover, HeaderPopover } from './acountPopover';
import SideMenu from './sideMenu';
// import { purple } from '@ant-design/colors'
// import { useTheme } from 'styled-components';
const { Header, Content } = Layout;


const DefaultLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(collapsed ? 'PTZ' : 'Petruz Web');

  // Avatar props
  const [oppenedAvatarPopup, seetOppenedAvatarPopup] = useState<boolean>(false);

  const toggle = () => {
    setCollapsed(!collapsed)
  };
  // const theme = useTheme();
  const location = useLocation();
  const { user } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestUserData());
  }, [])

  useEffect(() => {
    if (collapsed) {
      setTitle('PTZ');
    } else {
      setTimeout(() => {
        setTitle('Petruz Web');
      }, 100);
    }
  }, [collapsed])

  return (
    <React.Fragment>
      {user.loading === 'succeeded' ?
        <Layout style={{ minHeight: '100vh' }}>
          <SiderStyled width={200} trigger={null} collapsible collapsed={collapsed} onCollapse={(coll => setCollapsed(coll))}>
            <div className="logo">
              <h1>{title}</h1>
            </div>
            {/* <Divider style={{ borderColor: '#444', margin: 0 }} /> */}
            <SideMenu collapsed={collapsed} />
          </SiderStyled>
          <Layout>
            <Header
              className="header"
              style={
                {
                  padding: 0,
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }
              }>

              <Menu theme="light" mode="horizontal" className="site-layout-background" defaultSelectedKeys={[location.pathname]} >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
                <Menu.Item key="/home" ><StyledLink to='/home' >Home</StyledLink></Menu.Item>
                <Divider type="vertical" />
                <Menu.Item key="/profile" ><StyledLink to='/profile'>Profile</StyledLink></Menu.Item>

              </Menu>
              <StyledSpace direction='horizontal' size='middle' align='center' >
                <Badge>
                  <GiFactory size={24} color={'#53284F'} />
                  <RiArrowDropDownFill size={24} />
                </Badge>
                <Popover
                  placement="bottomRight"
                  title={HeaderPopover} content={BodyPopover}
                  trigger='click'
                  onVisibleChange={(visible) => seetOppenedAvatarPopup(!oppenedAvatarPopup)}
                >
                  <span className="avatar-item" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Badge count={1} style={{ marginRight: 5 }}>
                      <Avatar shape="square">{user.initials}</Avatar>
                    </Badge>
                    {oppenedAvatarPopup ? <RiArrowDropUpFill size={24} /> : <RiArrowDropDownFill size={24} />}
                  </span>
                </Popover>
              </StyledSpace>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              {children}
            </Content>
            <Footer style={{ textAlign: 'right' }}>
              <strong>Petruz Web</strong>
          ©2021 | Design Sys. by @AntDesign - vBeta 2.0</Footer>
          </Layout>
        </Layout>
        : // if user is not fetched, page returns loading component
        <Loading />
      }
    </React.Fragment>
  )
}

export default DefaultLayout;