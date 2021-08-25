import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Button,
    DatePicker,
    notification,
    Space,
    AutoComplete,
} from 'antd';
import { FormProps } from 'antd/lib/form';
import { Container, RowResponsive, Section } from './styles';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import api from '@Services/api';
import { format } from 'date-fns';
import { useAppSelector } from '@Store/hooks';

const formItemLayout: FormProps = {
    style: {
        maxWidth: 900
    }

};



interface FormData {
    groupname: string,
    users: UsersFormData[]
}

interface UsersFormData {
    name: string,
    functionname: string
}

interface UsersData {
    id: string | number | null,
    email: string,
    firstname: string,
    lastname: string,
    birth: string
}


const AddTeam = () => {
    const [form] = Form.useForm();
    const { token } = useAppSelector(state => state.auth)
    const [options, setOptions] = useState<{value: string}[]>()


    useEffect(() => {
        listarUsuarios()
    }, [])

    const listarUsuarios = () => {
        api.get('users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((data) => {
            let collaboratorsArray:{value: string}[] = []
            // console.log(data.data);
            data.data.map((collaborator:UsersData)=>
            collaboratorsArray.push({value: collaborator.firstname+' '+collaborator.lastname})
            )
            setOptions(collaboratorsArray)
            // notification.success({
            //     message: 'Sucesso',
            //     description: 'Usuarios listados'
            // })
        }

        ).catch(e => {
            console.log(e);

            notification.error({
                message: 'Falha na listagem',
                description: e
            })
        }
        )
    }

    const onFinish = async (values: FormData) => {
        console.log(values);

    }

    return (
        <Container>
            <Section>
                <h2>Definir Equipe</h2>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="addTeam"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '86',
                    }}
                    scrollToFirstError
                    layout='vertical'
                >

                    <Form.Item
                        name="groupname"
                        label="Nome da Equipe"
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


                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'first']}
                                            fieldKey={[fieldKey, 'first']}
                                            rules={[{ required: true, message: 'Informe o nome colaborador' }]}
                                        >
                                            <AutoComplete
                                                style={{ width: 200 }}
                                                options={options}
                                                placeholder="Nome do colaborador"
                                                filterOption={(inputValue, option) =>
                                                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                                }
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'function']}
                                            fieldKey={[fieldKey, 'function']}
                                        >
                                            <Input placeholder="Função" />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Adicionar participante
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
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

export default AddTeam
