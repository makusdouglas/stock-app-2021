import React, { useState, useEffect } from 'react';

import { Menu, Avatar, Space } from 'antd';
import { Link } from 'react-router-dom';
import {
    DashboardOutlined,
    UserOutlined,
    TeamOutlined,
    SafetyOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons'
import { MenuTitle, MenuUserInfo } from './styles';
import { useAppSelector } from '../../store/hooks';
const { SubMenu } = Menu;
interface MenuProps {
    collapsed: boolean;
}
const SideMenu: React.FC<MenuProps> = ({ collapsed }) => {

    const [menuText, setMenuText] = useState<string>(collapsed ? 'MENU' : 'MENU INVENTÁRIO');
    const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);

    const { firstName, lastName, fabrica } = useAppSelector(state => state.user);
    const { factory } = useAppSelector(state => state.app);

    useEffect(() => {
        if (collapsed) {
            setMenuText('MENU');
            setIsCollapsed(true);
        } else {
            setTimeout(() => {
                setMenuText('MENU INVENTÁRIO');
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
                <Link to='/user/profile/1'>
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
                                    <h6>{factory.find(f => f.codigo.toString() === fabrica?.toString())?.descricao || 'MASTER'}</h6>

                                </div>
                            </Space>}
                        </Space>
                    </MenuUserInfo>
                </Link>
                <Menu.Divider />
                <MenuTitle collapsed={isCollapsed}>
                    <h4>{menuText}</h4>
                </MenuTitle>
                <Menu.Item key="sub1" icon={<DashboardOutlined />}>
                    <Link to='/app/dashboard'>Dashboard</Link>
                </Menu.Item>
                <SubMenu key="sub2" icon={<UsergroupAddOutlined />} title="Equipes Inventário">
                    <Menu.Item key="1"><Link to='/teams/manage'>Definir equipes</Link></Menu.Item>
                    <Menu.Item key="2">Permissões</Menu.Item>
                </SubMenu>
                <Menu.Divider />
                <MenuTitle collapsed={isCollapsed}>
                    <h4>ADMIN</h4>
                </MenuTitle>

                <Menu.Item key='sub3' icon={<TeamOutlined />} >
                    <Link to='/users/manage'>Usuários</Link>
                </Menu.Item>
                <Menu.Item key="sub6" icon={<SafetyOutlined />}>
                    <Link to='/permissions/manage'>Permissões</Link>
                </Menu.Item>

            </Menu>
        </React.Fragment>
    );

}

export default SideMenu;