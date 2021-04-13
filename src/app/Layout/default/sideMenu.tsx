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

    const { firstName, lastName, fabrica } = useAppSelector(state => state.user);
    const { factory } = useAppSelector(state => state.app);

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
                                <Link to='/user/profile/0'>
                                    <h6>{factory.find(f => f.codigo.toString() === fabrica?.toString())?.descricao || 'MASTER'}</h6>
                                </Link>
                                <Link to='/user/profile/0'>
                                    <IconButton
                                        shape='circle'
                                        children={<SettingOutlined size={20} />}
                                    />
                                </Link>
                            </div>
                        </Space>}
                    </Space>
                </MenuUserInfo>
                <MenuTitle collapsed={isCollapsed}>
                    <h4>{menuText}</h4>
                </MenuTitle>

                <Menu.Item key="sub1" icon={<DashboardOutlined />}>
                    <Link to='/app/dashboard'>Dashboard</Link>
                </Menu.Item>
                <SubMenu key="sub2" icon={<DashboardOutlined />} title="App">
                    <Menu.ItemGroup key="g1" title="Dashboard">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub3" icon={<LaptopOutlined />} title="Manutenção">
                    <Menu.ItemGroup key="g2" title="Manutenção">
                        <Menu.Item key="5">Início</Menu.Item>
                        <Menu.Item key="6">Fugais</Menu.Item>
                        <Menu.Item key="7">Ordens de Serviço</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g3" subMenuKey="sub6" title="Relatórios">
                        <Menu.Item key="8">Peças Prioritárias</Menu.Item>
                        <Menu.Item key="9">Estatísticas Manutenção</Menu.Item>
                        <Menu.Item key="10">Relatório de O.S</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub4" icon={<NotificationOutlined />} title="Prog. de Produção">
                    <Menu.Item key="11">option9</Menu.Item>
                    <Menu.Item key="12">option10</Menu.Item>
                    <Menu.Item key="13">option11</Menu.Item>
                    <Menu.Item key="14">option12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<NotificationOutlined />} title="PROD">
                    <Menu.Item key="15">option9</Menu.Item>
                    <Menu.Item key="16">option10</Menu.Item>
                    <Menu.Item key="17">option11</Menu.Item>
                    <Menu.Item key="18">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </React.Fragment>
    );

}

export default SideMenu;