import React from 'react';
import {
    Form,
    Input,
    Button,
    notification,
} from 'antd';
import { FormProps } from 'antd/lib/form';
import { Container, Section } from './styles';
import api from '@Services/api';
import { useAppSelector } from '@Store/hooks';

const formItemLayout: FormProps = {
    style: {
        maxWidth: 900
    }

};

interface FormData {
    name: string,
    description: string
}

const AddFunction = () => {
    const [form] = Form.useForm();
    const { token } = useAppSelector(state => state.auth)

    const onFinish = async (values: FormData) => {
        api.post('roles', {
            name: values.name.toUpperCase(),
            description: values.description
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((data) => {
            console.log(data);

            notification.success({
                message: 'Sucesso',
                description: 'Cadastro efetuado'
            })
        }

        ).catch(e => {

            notification.error({
                message: `Erro ${e.response.status} no cadastro`,
                description: 'Erro: ' + e.response.data.message
            })
        }
        )
    };

    return (
        <Container>
            <Section style={{ width: '100%' }}>
                <h2>Cadastrar nova função</h2>
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

                    <Form.Item
                        name="name"
                        label="Nome da Função"
                        required
                        tooltip="Iforme o nome da nova função que deseja cadastrar"
                        rules={[
                            {
                                type: 'string',
                                min: 2,
                                message: 'Nome muito curto, verifique e tente novamente'
                            },
                            {
                                required: true,
                                message: 'Insira o nome da função',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        name="description"
                        label="Descrição da função"
                        required
                        tooltip="Insira uma breve descrição da função"
                        rules={[
                            {
                                type: 'string',
                                min: 2,
                                message: 'descrição muito curta, verifique e tente novamente'
                            },
                            {
                                required: true,
                                message: 'Insira uma breve descrição da função',
                            },
                        ]}
                    >
                        <Input.TextArea />
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

export default AddFunction