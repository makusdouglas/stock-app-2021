import React from 'react'
import { Button, Form, FormProps, Input, message, notification} from 'antd';
import { Container, Section } from './styles';
import api from '@Services/api';


interface PermissionsData {
    id: string | number | null,
    nmodule: string,
    type: string,
    description: string,
    createAt: string,
    updateAt: string,
}
interface RoleData {
    id: string | number | null,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    permissions: PermissionsData[]
}

interface Props {
    roleData: RoleData
    userToken: string | null
}
const formItemLayout: FormProps = {
    style: {
        maxWidth: 900
    }
};

interface FormData {
    name: string,
    description: string
}



function EditCollaborator({ roleData, userToken }: Props) {

    const [form] = Form.useForm();


    const onFinish = async (values: FormData) => {
        if (values.name || values.description) {
            var updateInfo = values
            // const birthday = format(new Date(values?.birth), 'yyyy-MM-dd')
            // values.birth = birthday
            updateInfo = {
                name: values.name ? values.name : roleData.name,
                description: values.description ? values.description : roleData.description
            }

            api.patch(`roles/${roleData.id}`, updateInfo, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }).then((data) => {
                console.log(data);

                notification.success({
                    message: 'Sucesso',
                    description: 'Atualização realizada'
                })
            }

            ).catch(e => {

                notification.error({
                    message: `Erro ${e.response.status} no cadastro`,
                    description: 'Erro: ' + e.response.data.message
                })
            }
            )
        } else {
            message.info("Sem alteração")
        }
    };
    return (
        <Container>
            <Section style={{ width: '100%' }}>
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
                        tooltip="Informe o nome da nova função que deseja cadastrar"
                        rules={[
                            {
                                type: 'string',
                                min: 2,
                                message: 'Nome muito curto, verifique e tente novamente'
                            },
                        ]}
                    >
                        <Input placeholder={roleData.name} />
                    </Form.Item>


                    <Form.Item
                        name="description"
                        label="Descrição da função"
                        tooltip="Insira uma breve descrição da função"
                        rules={[
                            {
                                type: 'string',
                                min: 2,
                                message: 'descrição muito curta, verifique e tente novamente'
                            },
                        ]}
                    >
                        <Input.TextArea placeholder={roleData.description} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Cadastrar
                        </Button>
                    </Form.Item>
                </Form>
            </Section>
        </Container>
    )
}

export default EditCollaborator