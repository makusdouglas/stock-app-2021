import React from 'react'
import { Button, DatePicker, Form, FormProps, Input, notification } from 'antd';
import { Container, RowResponsive, Section } from './styles';
import api from '@Services/api';
import { format } from 'date-fns';


interface UsersData {
    id: string | number | null,
    email: string,
    firstname: string,
    lastname: string,
    birth: string
}

interface Props {
    userData: UsersData 
    userToken: string | null
}
const formItemLayout: FormProps = {
    style: {
        maxWidth: 900
    }
};
    
interface FormData {
    email: string,
    firstname: string,
    lastname: string,
    birth: string,
}

    

function EditTeam({ userData, userToken }:Props){

    const [form] = Form.useForm();
   

    const onFinish = async (values: FormData) => {
        var updateInfo = values
        // const birthday = format(new Date(values?.birth), 'yyyy-MM-dd')
        // values.birth = birthday
        updateInfo = {
            birth: values.birth ? format(new Date(values.birth), 'yyyy-MM-dd') : userData.birth,
            email: values.email ? values.email : userData.email,
            firstname: values.firstname ? values.firstname : userData.firstname,
            lastname: values.lastname ? values.lastname : userData.lastname,            
        }
        
        api.patch(`users/${userData.id}`, updateInfo, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then((data)=>{
            console.log(data);
            
            notification.success({
                message: 'Sucesso',
                description: 'Atualização realizada'
            })
        }

        ).catch( e =>{
            
            notification.error({
                message: `Erro ${e.response.status} no cadastro`,
                description: 'Erro: '+ e.response.data.message
            })}
        )
    };
    return(
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
                                    required: false,
                                    message: 'Insira seu nome',
                                },
                            ]}
                        >
                            <Input placeholder={userData.firstname}/>
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
                                    required: false,
                                    message: 'Insira seu sobrenome',
                                },
                            ]}
                        >
                            <Input placeholder={userData.lastname}/>
                        </Form.Item>
                        <Form.Item
                            name="birth"
                            label="Data de nascimento"
                            rules={[
                                {
                                    type: 'object' as const,
                                    required: false,
                                    message: 'Por favor, informe sua data de mascimento',
                                }
                            ]}

                        >
                            <DatePicker format='DD/MM/YYYY' placeholder={new Date(userData.birth).toLocaleDateString()}/>
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
                                required: false,
                                message: 'Por favor, insira seu e-mail!',
                            },
                        ]}
                    >
                        <Input placeholder={userData.email} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Atualizar
                        </Button>
                    </Form.Item>
                </Form>
            </Section>
        </Container>
    )
}

export default EditTeam