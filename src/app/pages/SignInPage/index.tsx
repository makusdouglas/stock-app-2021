import React from 'react';
import { Typography, Image, Input, Space, Form, Checkbox, Button, Divider, notification } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Container, ImageStyled, LeftSider, RightSide, FormContainer } from './styles';
import Carrossel from '../../components/Carrossel';
import { Footer } from 'antd/lib/layout/layout';
import { SignInPayload } from '../../features/auth/types';
import { ValidateErrorEntity } from './types';

type SignInFormValidatorErrorsType = ValidateErrorEntity<SignInPayload>;
const SignInPage: React.FC = () => {
    const { Title, Text } = Typography;
    const [signInForm] = Form.useForm<SignInPayload>();

    const onFinish = (values: SignInPayload) => {
        console.log('Success');
        console.table(signInForm.getFieldsValue())
    };

    const onFinishFailed = (errorInfo: SignInFormValidatorErrorsType) => {
        console.log('Failed:', errorInfo);
        errorInfo.errorFields.map(err => {
            err.errors.map(error =>
                notification.error({
                    message: err.name,
                    description: error
                }))
        })
    };
    return (
        <Container>
            <LeftSider className="carrousel-container-stld">
                <Carrossel
                    fade
                    adaptiveHeight
                    autoplay
                    autoplaySpeed={8000}
                    centerMode
                    responsive={[{
                        breakpoint: 720,
                        settings: {
                        }
                    }]}
                    style={{
                        maxWidth: '50vw',
                        // height: '100vh',

                    }}>
                    <ImageStyled src="images/carrousel/petruz-depoimento-paulo.jpg" />
                    <ImageStyled src="images/carrousel/petruz-depoimento-expedicao.png" />
                    <ImageStyled src="images/carrousel/petruz-gratidao.jpg" />
                    <ImageStyled src="images/carrousel/petruz-depoimento.jpg" />
                </Carrossel>
            </LeftSider>
            <RightSide>
                <FormContainer>
                    <section>
                        <Image preview={false} src="images/logos/logoPetruzCompleta.png" />
                    </section>
                    <Space direction="vertical" size='middle'>
                        <Divider orientation='center' >
                            <Title level={4} style={{ marginBottom: 0 }}>Login</Title>
                        </Divider>
                        {/* <Title level={3} style={{ marginBottom: 0 }}>Login</Title> */}
                        <Text type="secondary">Insira seus dados abaixo:</Text>
                        <Form<SignInPayload>
                            form={signInForm}
                            initialValues={{ remember: false }}
                            onFinish={onFinish}
                            onFinishFailed={(errors: SignInFormValidatorErrorsType) => onFinishFailed(errors)}
                            name="authForm"
                            layout='vertical'
                        >
                            <Form.Item
                                label="E-mail"
                                name="email"
                                rules={[
                                    { required: true, message: 'Por favor, insira seu e-mail.' }
                                ]}
                            >
                                <Input
                                    placeholder="Seu e-ḿail"
                                    // value=""
                                    onChange={txt => { }}
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
                                    onChange={txt => { }}
                                    iconRender={visible => (visible ? <EyeTwoTone size={20} /> : <EyeInvisibleOutlined size={20} />)}
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
            <Footer
                style={{
                    gridArea: 'footer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'whitesmoke',
                    backgroundColor: 'transparent',
                }}>
                Petruz WEb App ©2021 Created by Petruz Fruity - v1.4</Footer>
        </Container>
    );
}

export default SignInPage;