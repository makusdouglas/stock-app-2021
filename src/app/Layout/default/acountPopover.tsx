import { Typography, Avatar, Divider, Button } from 'antd';
import { UserOutlined, ExportOutlined } from '@ant-design/icons'

import React from 'react';
import { UserPopupBody, UserPopupFooter, UserPopupHeader } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { makeLogout } from '../../modules/SignIn/slice';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;
export const HeaderPopover: React.FC = () => (
    <UserPopupHeader>
        <Avatar shape="circle" icon={<UserOutlined />} style={{ position: 'absolute', bottom: '-16.5px', left: 'calc(50% - 16px)' }} />
        {/* <Title level={5}>{user.name}</Title> */}
    </UserPopupHeader>
);
export const BodyPopover: React.FC = () => {

    const { user } = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    return (
        <React.Fragment>
            <UserPopupBody>
                <Title level={4} style={{ marginBottom: 0 }}>{user.firstName + ' ' + user.lastName}</Title>
                <Text type='secondary'>{user.email}</Text>
            </UserPopupBody>
            <Divider style={{ marginBottom: '8px' }} />
            <UserPopupFooter>
                <Link to='/user/profile/0' >
                    <Button size='small' icon={<UserOutlined />}>
                        Perfil
                    </Button>
                </Link>
                <Button
                    danger
                    size='small'
                    icon={<ExportOutlined />}
                    onClick={() => dispatch(makeLogout())}
                >Sair</Button>
            </UserPopupFooter>
        </React.Fragment>
    )
};