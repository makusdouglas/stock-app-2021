import React from 'react';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { Container, Section, AvatarContainer } from './styles';
import {Avatar, Button, Tooltip, Typography, Image, Divider, Row, Col, Descriptions} from 'antd';
import {UserOutlined, EditOutlined} from '@ant-design/icons'

const {Text,Title } = Typography
const UserProfile: React.FC = () => {
    const { 
        name,
        firstName,
        lastName,
        email,
        birth,
        createdAt,
        active,
        id,
        roles
    } = useAppSelector(state => state.user);

    console.log('====================================');
    console.log(roles);
    console.log('====================================');
    return (
        <Container>
            <Section>
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

                <Title level={4} style={{marginBottom: 0, textAlign: "center"}} >{name}</Title>
                <Text style={{ textAlign: "center"}} >{email}</Text>
                <Divider/>
                <Row gutter={6} >
                    <Col span={12}>
                        <Row>
                            <Col span={24}>
                                <Descriptions title="Informações Básicas" labelStyle={{fontWeight: 600}} bordered column={1}>
                                    <Descriptions.Item label="ID">{id}</Descriptions.Item>
                                    <Descriptions.Item label="Nome">{firstName}</Descriptions.Item>
                                    <Descriptions.Item label="Sobrenome">{lastName}</Descriptions.Item>
                                    <Descriptions.Item label="E-mail">{email}</Descriptions.Item>
                                    <Descriptions.Item label="Dt. nascimento">{ birth && new Date(birth).toLocaleDateString()}</Descriptions.Item>
                                </Descriptions>
                            </Col>
                            <Col span={24} style={{marginTop: '15px'}}>
                                <Descriptions title="Informações Adicionais" labelStyle={{fontWeight: 'bold'}} bordered column={1}>
                                    <Descriptions.Item label="Ativo">{active ? 'Sim' : 'Não'}</Descriptions.Item>
                                    <Descriptions.Item label="Criado em">''</Descriptions.Item>
                                </Descriptions>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={12}>
                        <Text strong>Configurações</Text>
                    </Col>
                </Row>

            </Section>
        </Container>
    );
}

export default UserProfile;