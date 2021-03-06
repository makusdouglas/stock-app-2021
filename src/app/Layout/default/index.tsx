import React, { useEffect, useState } from 'react';

import { Layout, Breadcrumb } from 'antd';

import './index.less';
import { SiderStyled } from './styles';
import { Footer } from 'antd/lib/layout/layout';
import SideMenu from './sideMenu';
import HeaderStyled from './header';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { fetchUserData } from '@Module/User/slice';
import Loading from '@Components/Loading';
import SiderDrawer from './SiderDrawer';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const { Content } = Layout;


const DefaultLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const [title, setTitle] = useState<string>(collapsed ? 'STK' : 'Stok System');

  const screens = useBreakpoint();
  const breakpoints = Object.entries(screens).filter(sc => !!sc[1]);


  const toggle = () => {
    setCollapsed(!collapsed)
  };
  // const theme = useTheme();
  const { user } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (collapsed) {
      setTitle('STK');
    } else {
      setTimeout(() => {
        setTitle('Stok System');
      }, 100);
    }
  }, [collapsed])

  return (
    <React.Fragment>
      {user.loading === 'succeeded' ?
        <Layout style={{ minHeight: '100vh' }}>
          
          {breakpoints.length < 3? 
           (
            <SiderDrawer 
          placement='left'
          toggleVisibility={(e) => setCollapsed(e)}
          visible={collapsed}
          
          >
          <div className="logo">
              <h1>{title}</h1>
            </div>
            {/* <Divider style={{ borderColor: '#444', margin: 0 }} /> */}
            <SideMenu collapsed={collapsed} /> {/**SIDE MENU */}
          </SiderDrawer>
           )
           : (
            <SiderStyled
            width={200}
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={(coll => setCollapsed(coll))}
          >
            <div className="logo">
              <h1>{title}</h1>
            </div>
            
            <SideMenu collapsed={collapsed} /> 
          </SiderStyled>
           )
          }    

          
          <Layout>
            <HeaderStyled collapsed={collapsed} toggle={toggle} /> {/** HEADER */}

            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              {children}
            </Content>
            <Footer style={{ textAlign: 'right' }}>
              <strong>Stok System</strong>
          ??2021 | Design Sys. by @AntDesign - vBeta 2.0</Footer>
          </Layout>
        </Layout>
        : // if user is not fetched, page returns loading component
        <Loading />
      }
    </React.Fragment>
  )
}

export default DefaultLayout;