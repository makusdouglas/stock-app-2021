import React, { useState, useEffect } from 'react';

import { Menu, Avatar, Space } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, LaptopOutlined, NotificationOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { IconButton, MenuTitle, MenuUserInfo } from './styles';
import { useAppSelector } from '../../store/hooks';
// import { Container } from './styles';
const { SubMenu } = Menu;
interface MenuProps {
    collapsed: boolean;
}
const SideMenu: React.FC<MenuProps> = ({ collapsed }) => {

    const [menuText, setMenuText] = useState<string>(collapsed ? 'MENU' : 'MENU PRINCIPAL');
    const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);

    const { firstName, lastName } = useAppSelector(state => state.user);

    useEffect(() => {
        if (collapsed) {
            setMenuText('MENU');
            setIsCollapsed(true);
        } else {
            setTimeout(() => {
                setMenuText('MENU PRINCIPAL');
                setIsCollapsed(false);
            }, 100);
        }
    }, [collapsed])
    return (
        <React.Fragment>
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            >
                <MenuUserInfo collapsed={isCollapsed}>
                    <Space direction='horizontal'>
                        <Avatar icon={<UserOutlined />} />
                        {!isCollapsed && <Space direction='vertical'>
                            <h4>{firstName !== lastName ? `${firstName} ${lastName}` : firstName}</h4>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <h6>BELA IAÇA</h6>
                                <IconButton
                                    shape='circle'
                                    children={<SettingOutlined size={20} />}
                                />
                            </div>
                        </Space>}
                    </Space>
                </MenuUserInfo>
                <MenuTitle collapsed={isCollapsed}>
                    <h4>{menuText}</h4>
                </MenuTitle>

                <Menu.Item key="sub1" icon={<DashboardOutlined />}>
                    <Link to='/dashboard'>Dashboard</Link>
                </Menu.Item>
                <SubMenu key="sub2" icon={<DashboardOutlined />} title="Dashboard">
                    <Menu.ItemGroup key="g1" title="Dashboard">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub3" icon={<LaptopOutlined />} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<NotificationOutlined />} title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </React.Fragment>
    );

}

export default SideMenu;