import api from '@Services/api';
import { useAppSelector } from '@Store/hooks';
import { Button, List, message, Modal, notification, Popconfirm } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Section } from './styles';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import EditCollaborator from './EditCollaborator';

interface UsersData {
    id: string | number | null,
    email: string,
    firstname: string,
    lastname: string,
    birth: string
}
const ListCollaborators: React.FC = () => {

    const { token } = useAppSelector(state => state.auth)
    const userLoged = useAppSelector(state => state.user)
    const [users, setUsers] = useState<UsersData[]>([])
    const [userSelected, setUserSelected] = useState<UsersData>({
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        birth: ''
    })
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    useEffect(() => {
        listarUsuarios()
    }, [])

    const listarUsuarios = () => {
        api.get('users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((data) => {
            // console.log(data.data);
            setUsers(data.data)
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
    function confirm(id: string | number | null) {
        if (userLoged.id !== id) {
            api.delete(`users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(
                message.success('Exclusão realizada')
            ).catch(
                e => message.error(e)
            )
            listarUsuarios()
        } else {
            if (userLoged.id === id) {
                message.error('Não pode excluir a si mesmo!');
            }
        }

    }
    function cancel(e: any) {
        console.log(e);
        message.error('Exclusão cancelada');
    }

    function showModal(item: UsersData) {
        setUserSelected(item)
        setIsModalVisible(true)
    }
    const handleOk = () => {
        listarUsuarios()
        setIsModalVisible(false);
    }
    return (
        <Container>
            <Section style={{ width: '100%' }}>
                <h2>Colaboradores Cadastrados</h2>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={users}
                    renderItem={item =>
                        <>
                            <List.Item
                                key={item.id}
                                actions={[
                                    <Button type='link' icon={<EditOutlined />} size='small' onClick={() => showModal(item)}>
                                        Editar
                                    </Button>,
                                    <Popconfirm
                                        title="Você deseja mesmo excluir esse colaborador?"
                                        onConfirm={() => confirm(item.id)}
                                        onCancel={cancel}
                                        okText="Sim"
                                        cancelText="Não"
                                    >
                                        <Button type='link' danger icon={<DeleteOutlined />} size='small'>
                                            Excluir
                                        </Button>
                                    </Popconfirm>
                                ]}
                            >
                                <List.Item.Meta
                                    title={item.firstname + ' ' + item.lastname}
                                    description={
                                        <>
                                            <p>
                                                idade: {item.birth ?
                                                    new Date().getFullYear() - new Date(item.birth).getFullYear() :
                                                    0} anos
                                            </p>
                                            <p>
                                                email: {item.email}
                                            </p>
                                        </>
                                    }
                                />
                            </List.Item>
                        </>
                    }
                />
                <Modal title="Editar Cadastro" visible={isModalVisible} closable={false} footer={[
                    <Button type='default' size='small' onClick={handleOk}>
                        Encerrar edição
                    </Button>
                ]} >
                    <EditCollaborator userData={userSelected} />
                </Modal>
            </Section>
        </Container>
    );
}

export default ListCollaborators;