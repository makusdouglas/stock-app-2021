import React from 'react';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { Container, Section, AvatarContainer } from './styles';
import {Avatar, Button, Tooltip} from 'antd';
import {UserOutlined, EditOutlined} from '@ant-design/icons'


const UserProfile: React.FC = () => {
    const { fabrica } = useAppSelector(state => state.user);

    return (
        <Container>
            <Section>
                <h2>Meu Perfil</h2>
                <AvatarContainer>
                    <span>
                        <Avatar 
                            size={{ xs: 50, sm: 50, md: 70, lg: 120, xl: 120, xxl: 150 }} 
                            icon={<UserOutlined/>}
                        
                        >
                        </Avatar>
                        <Tooltip title="Editar foto">
                            <Button 
                                type="primary" 
                                shape="circle"
                                icon={<EditOutlined />} />
                        </Tooltip>
                    </span>
                </AvatarContainer>

            </Section>
        </Container>
    );
}

export default UserProfile;