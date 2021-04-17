import React from 'react';
import { Typography, Image, Input, Space, Form, Button, Divider, notification, Tooltip } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'

import { Container, RightSide, FormContainer } from './styles';
import { Footer } from 'antd/lib/layout/layout';
import { ValidateErrorEntity } from './types';

// Redux Methods and Types
import { IAuthState } from './types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { requestLogin } from './slice'

// assets
import appStockLogo from '@Assets/images/logos/stok.png'
import { Link } from 'react-router-dom';


type SignInFormValidatorErrorsType = ValidateErrorEntity<IAuthState>;
const SignIn: React.FC = () => {
    const { Title, Text } = Typography;
    const [signInForm] = Form.useForm<IAuthState>();
    const dispatch = useAppDispatch();
    const auth = useAppSelector(state => state.auth);
    const onFinish = async (values: IAuthState) => {
        const { email, password, rememberCredentials } = values;
        const authResult = await dispatch(requestLogin({
            email,
            password,
            rememberCredentials
        })
        );
        authResult.meta.requestStatus === 'rejected' && notification.error({
            message: 'Falha no login',
            description: 'Verifique suas credenciais de acesso'
        });
    };


    const onFinishFailed = (errorInfo: SignInFormValidatorErrorsType) => {
        console.log('Failed:', errorInfo);
        errorInfo.errorFields.map(err =>
            err.errors.map(error =>
                notification.warning({
                    message: `${err.name}`,
                    description: error
                }))
        )
    };
    // const clearFields = () => {
    //     signInForm.resetFields();
    // }
    const buttonstyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <Container>
            <RightSide>
                <FormContainer>
                    <section>
                        <Image preview={false} src={appStockLogo} />
                    </section>
                    <Space direction="vertical" size='middle' style={{padding: 10}}>
                        <Divider orientation='center' >
                            <Title level={4} style={{ marginBottom: 0 }}>Login</Title>
                        </Divider>
                        {/* <Title level={3} style={{ marginBottom: 0 }}>Login</Title> */}
                        <Text type="secondary">Insira seus dados abaixo:</Text>
                        <Form<IAuthState>
                            form={signInForm}
                            initialValues={{ rememberCredentials: false }}
                            onFinish={onFinish}
                            onFinishFailed={(errors: SignInFormValidatorErrorsType) => onFinishFailed(errors)}
                            name="authForm"
                            layout='horizontal'
                        >
                            <Form.Item
                                label="E-mail"
                                name="email"
                                rules={[
                                    { required: true, message: 'Por favor, insira seu e-mail.' },
                                    { type: 'email', message: 'Insira um e-mail válido.' }
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

                                rules={[
                                    { required: true, message: 'Por favor, insira sua senha.' },
                                    { type: 'string', min: 6, message: 'No mínimo 6 caracteres.' }
                                ]}
                            >
                                <Input.Password
                                    placeholder="Sua senha"
                                    type="password"
                                    onChange={txt => { }}
                                    iconRender={visible => (visible ? <EyeTwoTone size={20} /> : <EyeInvisibleOutlined size={20} />)}
                                />
                            </Form.Item>
                            <Space direction='horizontal' size='small' style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'baseline',
                                marginBottom: 0,
                            }}>

                                <Link to='/app/register'>Esqueci minha senha</Link>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={auth.loading === 'pending'}
                                    // disabled={auth.loading === 'pending'}
                                    // danger={auth.loading === 'failed'}
                                    >
                                        Entrar
                                </Button>
                                </Form.Item>
                            </Space>
                            <Divider orientation='center' style={{ margin: 0, marginBottom: 5 }} >
                                <Text type='secondary'>
                                    Ainda não possui conta?
                                </Text>
                            </Divider>
                            {/* <Divider orientation="center"> */}
                                <Space direction='horizontal' align="center" style={{display: "flex", justifyContent: 'center'}}>
                                    <Tooltip title="Google">
                                        <Button type="primary" shape="circle" icon={<GoogleOutlined />} />
                                    </Tooltip>
                                    <Tooltip title="Facebook">
                                        <Button type="primary" style={buttonstyle} shape="circle" icon={<FaFacebookF/>} />
                                    </Tooltip><Tooltip title="Linkedin">
                                        <Button type="primary" style={buttonstyle} shape="circle" icon={<FaLinkedinIn />} />
                                    </Tooltip>
                                </Space>
                            {/* </Divider> */}

                        </Form>

                    </Space>
                    <Divider style={{ margin: 0, marginBottom: 5 }} />
                    {/* <Footer
                        style={{
                            // gridArea: 'footer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 9,
                            padding: 0,
                            marginBottom: 5,
                            backgroundColor: 'transparent',
                        }}>
                        <strong>App STOCK</strong>
                        ©2021 | Design Sys. by @AntDesign - vBeta 0.1.0</Footer> */}
                </FormContainer>
            </RightSide>
        </Container>
    );
}

export default SignIn;