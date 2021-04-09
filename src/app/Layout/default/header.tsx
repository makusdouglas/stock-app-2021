import React, { useState } from 'react';

import { Layout, Menu, Divider, Avatar, Badge, Popover } from 'antd';
import { useLocation } from 'react-router';
import { BodyPopover, HeaderPopover } from './acountPopover';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons';
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';


import { StyledLink } from '../../components/HeaderComponent/styles';
import { StyledSpace } from './styles';
import { useAppSelector } from '../../store/hooks';

interface IHeaderProps {
    collapsed: boolean
    toggle: () => void
}

const { Header } = Layout;

const HeaderStyled: React.FC<IHeaderProps> = ({ collapsed, toggle }) => {
    const location = useLocation()

    // Avatar props
    const [oppenedAvatarPopup, seetOppenedAvatarPopup] = useState<boolean>(false);

    // Redux 
    const { user } = useAppSelector(state => state);
    return (
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
    );
}

export default HeaderStyled;