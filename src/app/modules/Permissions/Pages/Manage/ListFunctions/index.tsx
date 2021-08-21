import api from '@Services/api';
import { useAppSelector } from '@Store/hooks';
import { Button, List, message, Modal, notification, Popconfirm} from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Section } from './styles';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import AddFunction from '../AddFunction';
import EditCollaborator from './AlterFunction';


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
const ListCollaborators: React.FC = () => {

    const { token } = useAppSelector(state => state.auth)
    const [roles, setRoles] = useState<RoleData[]>([])
    const [roleSelected, setRoleSelected] = useState<RoleData>({
        id: '',
        name:'',
        description:'',
        permissions:[],
        createdAt:'',
        updatedAt:''
    })
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);

    useEffect(() => {
        listarFuncoes()
    }, [])
    console.log(roles);

    const listarFuncoes = () => {
        api.get('roles', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((data) => {
            // console.log(data.data);
            setRoles(data.data.roles)
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
        api.delete(`roles/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(
            message.success('Exclusão realizada')
        ).catch(
            e => message.error(e)
        )
        listarFuncoes()

    }
    function cancel(e: any) {
        console.log(e);
        message.error('Exclusão cancelada');
    }

    function showModal(item: RoleData) {
        setRoleSelected(item)
        setIsModalVisible(true)
    }
    const handleOk = () => {
        listarFuncoes()
        setIsModalVisible(false);
    }

    function showAddModal() {
        setIsAddModalVisible(true)
    }
    const handleAddOk = () => {
        listarFuncoes()
        setIsAddModalVisible(false);
    }
    return (
        <Container>
            <Section style={{ width: '100%' }}>
                <h2>Funções Cadastradas</h2>

                <Modal visible={isAddModalVisible} closable={false} footer={[
                    <Button type='default' size='small' onClick={handleAddOk}>
                        Encerrar adição
                    </Button>
                ]} >
                    <AddFunction />
                </Modal>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    header={
                        <Button type='link' icon={<PlusOutlined />} size='small' onClick={showAddModal}>
                            Criar função
                        </Button>
                    }
                    dataSource={roles}
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
                                    title={item.name}
                                    description={
                                        <>
                                            <p>
                                                descrição: {item.description}
                                            </p>
                                            <p>
                                                criado em: {new Date(item.createdAt).toLocaleDateString()} | ultima atualização: {new Date(item.updatedAt).toLocaleDateString()}
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
                    <EditCollaborator roleData={roleSelected} userToken={token} />
                </Modal>
            </Section>
        </Container>
    );
}

export default ListCollaborators;