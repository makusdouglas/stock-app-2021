import React, { useState } from 'react';
import {
    Form,
    Input,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
    Space,
} from 'antd';
import { FormListProps, FormProps } from 'antd/lib/form';
import { Container, RowResponsive, Section } from './styles';

const { Option } = Select;

const residences = [
    {
        value: 'castanhal',
        label: 'Castanhal',
        children: [
            {
                value: 'estrela',
                label: 'Estrela',
                children: [
                    {
                        value: 'alameda 22 de maio',
                        label: 'Alameda 22 de maio',
                    },
                ],
            },
            {
                value: 'jaderlandia',
                label: 'Jaderlândia',
                children: [
                    {
                        value: '3a rua',
                        label: '3ª rua',
                    },
                ],
            },
        ],
    },

];

const formItemLayout: FormProps = {
    style: {
        maxWidth: 900
    }
    
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 23,
        },
    },
};

const UserEditProfile = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onWebsiteChange = (value: string) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));

    return (
        <Container>
        <Section>
            <h2>Editar Perfil</h2>
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
                        name="birth"
                        label="Data de nascimento"
                        rules={[
                            {
                                type: 'date',
                                message: 'Insira uma data válida',
                            },
                            {
                                required: true,
                                message: 'Por favor, insira sua data de nascimento!',
                            },
                        ]}
                    >
                        <DatePicker format='DD/MM/yyyy'  />
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
                        Register
                </Button>
                </Form.Item>
            </Form>
        </Section>
        </Container>
    );
};

export default UserEditProfile
