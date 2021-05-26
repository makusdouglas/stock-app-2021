import React from 'react';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { Container, Section, AvatarContainer } from './styles';
import {Avatar, Button, Tooltip, Typography, Image, Divider, Row, Col, Descriptions, List, PageHeader} from 'antd';
import {UserOutlined, EditOutlined, SafetyCertificateTwoTone} from '@ant-design/icons'

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

    return (
        <Container>
            <Section>
                <PageHeader
                    // className="site-page-header"
                    // onBack={() => null}
                    title="Meu Perfil"
                    subTitle="Aqui estão suas informações pessoais"
                    extra={[
                        <Button key="1" type="primary" icon={<EditOutlined />}>
                          Editar
                        </Button>,
                      ]}
                />
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
                {/* MAIN ROW */}
                <Row gutter={[8, 15]}>
                    <Col md={{span: 24}} lg={{span: 12}}>
                        {/* INNER ROW */}
                        <Row gutter={[5, 15]}>
                            <Col span={24}>
                                <Descriptions title="Informações Básicas" labelStyle={{fontWeight: 600}} bordered column={1}>
                                    <Descriptions.Item label="ID">{id}</Descriptions.Item>
                                    <Descriptions.Item label="Nome">{firstName}</Descriptions.Item>
                                    <Descriptions.Item label="Sobrenome">{lastName}</Descriptions.Item>
                                    <Descriptions.Item label="E-mail">{email}</Descriptions.Item>
                                    <Descriptions.Item label="Dt. nascimento">{ birth && new Date(birth).toLocaleDateString()}</Descriptions.Item>
                                </Descriptions>
                            </Col>
                            <Col span={24}>
                                <Descriptions title="Informações Adicionais" labelStyle={{fontWeight: 'bold'}} bordered column={1}>
                                    <Descriptions.Item label="Ativo">{active ? 'Sim' : 'Não'}</Descriptions.Item>
                                    <Descriptions.Item label="Criado em">{!!createdAt && new Date(createdAt).toLocaleDateString()}</Descriptions.Item>
                                </Descriptions>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={{span: 24}} lg={{span: 12}}>
                        {/* INNER ROW */}
                        <Row gutter={[5, 15]}>
                            <Col span={24}>
                                {/* <Descriptions title="Grupos" labelStyle={{fontWeight: 600}} bordered> */}
                                    <List>
                                        {roles.map(r => (
                                            <List.Item>
                                                <List.Item.Meta 
                                                    avatar={<SafetyCertificateTwoTone/>}
                                                    title={r.name}
                                                    description={r.description}
                                                />
                                            </List.Item>
                                        ))}
                                    </List>
                                {/* </Descriptions> */}
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Section>
        </Container>
    );
}

export default UserProfile;