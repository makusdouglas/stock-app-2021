import React from 'react';
import {Typography, Image, Input, Space, Form, FormProps, Checkbox, Button, Divider} from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Container, ImageStyled, LeftSider, RightSide, FormContainer } from './styles';
import Carrossel from '../../components/Carrossel';


const SignInPage: React.FC = () => {
    const {Title, Text} = Typography;
    
    const tailLayout = {
    
      };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Container>
            <LeftSider>
                {/* <Title>Petruz Fruity</Title> */}
                <Carrossel
                fade
                adaptiveHeight
                accessibility={false}
                // autoplay 
                style={{
                    maxWidth: '50vw',
                    height: '100vh',

                }}>
                <ImageStyled preview={false} src="images/carrousel/petruz-depoimento-paulo.jpg"/>
                <ImageStyled preview={false} src="images/carrousel/petruz-depoimento-expedicao.png"/>
                <ImageStyled preview={false} src="images/carrousel/acai-beneficios.jpg"/>
                <ImageStyled preview={false} src="images/carrousel/petruz-depoimento.jpg"/>
                      
                </Carrossel>
            </LeftSider>
            <RightSide>
                <section>
                    <Image preview={false} width={'60px'} src="images/logos/white-logo.png"/>
                    <Title>Petruz Web</Title>
                </section>
                <FormContainer>
                    <Space direction="vertical" size='middle'>
                        <Title level={3} style={{marginBottom: 0}}>Login</Title>
                        <Text type="secondary">Insira seus dados abaixo:</Text>
                        <Form
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        name="authForm"
                        >
                            <Form.Item
                                label="E-mail"
                                name="email"
                                rules={[{ required: true, message: 'Por favor, insira seu e-mail.' }]}
                            >
                                <Input
                                placeholder="Seu e-ḿail"
                                // value=""
                                onChange={txt => {}}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Senha"
                                name="password"
                                rules={[{ required: true, message: 'Por favor, insira sua senha.' }]}
                            >
                                <Input.Password 
                                    placeholder="Sua senha"
                                    type="password"
                                    // value=""
                                    onChange={txt => {}}
                                    iconRender={visible => (visible ? <EyeTwoTone size={20} /> : <EyeInvisibleOutlined size={20}/>)}
                            />
                            </Form.Item>
                            <Space direction='horizontal' size='small' style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                marginBottom: 0,
                            }}>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Lembrar senha</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Entrar
                                </Button>
                            </Form.Item>
                            </Space>
                        </Form>

                    </Space>
                </FormContainer>
            </RightSide>
        </Container>
    );
}

export default SignInPage;