import React from 'react';
import { Typography, Image, Input, Space, Form, Checkbox, Button, Divider, notification } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Container, ImageStyled, LeftSider, RightSide, FormContainer } from './styles';
import Carrossel from '../../components/Carrossel';
import { Footer } from 'antd/lib/layout/layout';
import { ValidateErrorEntity } from './types';

// Redux Methods and Types
import { IAuthState } from '../../features/auth/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { requestLogin } from '../../features/auth/slice'


type SignInFormValidatorErrorsType = ValidateErrorEntity<IAuthState>;
const SignInPage: React.FC = () => {
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
                    <Space direction="vertical" size='small'>
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
                                marginBottom: 0,
                            }}>

                                <Form.Item name="rememberCredentials" valuePropName="checked">
                                    <Checkbox>Lembrar senha</Checkbox>
                                </Form.Item>
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
                        </Form>

                    </Space>
                    <Divider style={{ margin: 0, marginBottom: 5 }} />
                    <Footer
                        style={{
                            // gridArea: 'footer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 9,
                            padding: 0,
                            backgroundColor: 'transparent',
                        }}>
                        <strong>Petruz Web</strong>
                        ©2021 | Design Sys. by @AntDesign - vBeta 2.0</Footer>
                </FormContainer>
            </RightSide>
        </Container>
    );
}

export default SignInPage;