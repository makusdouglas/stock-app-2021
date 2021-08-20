import React from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker,
    notification,
} from 'antd';
import { FormProps } from 'antd/lib/form';
import { Container, RowResponsive, Section } from './styles';
import api from '@Services/api';
import { format } from 'date-fns';

const formItemLayout: FormProps = {
    style: {
        maxWidth: 900
    }

};

interface FormData {
    email: string,
    password: string
    firstname: string,
    lastname: string,
    birth: string,
}

const AddCollaborator = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: FormData) => {
        const birthday = format(new Date(values.birth), 'yyyy-MM-dd')
        values.birth = birthday
        api.post('users/register', values).then((data)=>{
            console.log(data);
            
            notification.success({
                message: 'Sucesso',
                description: 'Cadastro efetuado'
            })
        }

        ).catch( e =>{
            
            notification.error({
                message: `Erro ${e.response.status} no cadastro`,
                description: 'Erro: '+ e.response.data.message
            })}
        )
    };

    return (
        <Container>
            <Section>
                <h2>Cadastrar Função</h2>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '86',
                    }}
                    scrollToFirstError
                    layout='vertical'
                >
                    <RowResponsive>

                        <Form.Item
                            name="firstname"
                            label="Nome"
                            rules={[
                                {
                                    type: 'string',
                                    min: 2,
                                    message: 'Nome muito curto, verifique e tente novamente'
                                },
                                {
                                    required: true,
                                    message: 'Insira seu nome',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            name="lastname"
                            label="Sobrenome"
                            rules={[
                                {
                                    type: 'string',
                                    min: 2,
                                    message: 'Sobrenome muito curto, verifique e tente novamente'
                                },
                                {
                                    required: true,
                                    message: 'Insira seu sobrenome',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="birth"
                            label="Data de nascimento"
                            rules={[
                                {
                                    type: 'object' as const,
                                    required: true,
                                    message: 'Por favor, informe sua data de mascimento',
                                }
                            ]}

                        >
                            <DatePicker format='DD/MM/YYYY' />
                        </Form.Item>

                    </RowResponsive>


                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'Email inválido.',
                            },
                            {
                                required: true,
                                message: 'Por favor, insira seu e-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Senha"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira sua senha para confirmar a alteração!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Cadastrar
                        </Button>
                    </Form.Item>
                </Form>
            </Section>
        </Container>
    );
};

export default AddCollaborator
