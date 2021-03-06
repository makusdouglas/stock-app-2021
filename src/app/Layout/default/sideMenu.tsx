import React, { useState, useEffect } from 'react';

import { Menu, Avatar, Space } from 'antd';
import { Link } from 'react-router-dom';
import {
    DashboardOutlined,
    UserOutlined,
    TeamOutlined,
    SettingOutlined,
    SafetyOutlined,
    UsergroupAddOutlined,
    UserAddOutlined
} from '@ant-design/icons'
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
                <Menu.Item key="sub10" icon={<UserOutlined />}>
                    <Link to='/user/profile/1'>Perfil</Link>
                </Menu.Item>
                <SubMenu key="sub2" icon={<UsergroupAddOutlined /> } title="Equipes Invent??rio">
                    <Menu.Item key="1"><Link to='/team/manage/1'>Cadastro de usuarios</Link></Menu.Item>
                    <Menu.Item key="2">Permiss??es</Menu.Item>
                </SubMenu>

                <MenuTitle collapsed={isCollapsed}>
                    <h4>ADMIN</h4>
                </MenuTitle>

                <SubMenu key='sub3' icon={<SettingOutlined />} title='Usu??rios'>
                    <Menu.Item key="sub7" icon={<UserAddOutlined />}>
                        <Link to='/app/dashboard'>Adicionar</Link>
                    </Menu.Item>
                    <Menu.Item key="sub5" icon={<TeamOutlined />}>
                        <Link to='/app/dashboard'>Grupos</Link>
                    </Menu.Item>
                    <Menu.Item key="sub6" icon={<SafetyOutlined />}>
                        <Link to='/app/dashboard'>Permiss??es</Link>
                    </Menu.Item>
                </SubMenu>

            </Menu>
        </React.Fragment>
    );

}

export default SideMenu;