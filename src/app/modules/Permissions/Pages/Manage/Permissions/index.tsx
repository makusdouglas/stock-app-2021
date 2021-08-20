import React, { useState } from 'react';
import { Container, Section} from './styles';
import { Avatar, Button, message, Modal, Popconfirm, Space, Table, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons'
import Column from 'antd/lib/table/Column';



const data2: any[] = [];
for (let i = 0; i < 4; i++) {
    data2.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Produtos de Limpeza',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Perecíveis',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Não Perecíveis',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const UserProfile: React.FC = () => {
    // const { fabrica } = useAppSelector(state => state.user);
    const [isModalVisible, setIsModalVisible] = useState(false);
    function confirm(e: any) {
        console.log(e);
        message.success('Exclusão realizada');
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
    const onSelectChange = (selectedRowKeys: React.SetStateAction<any[]>) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys: any[]) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys: any[]) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    function cancel(e: any) {
        console.log(e);
        message.error('Exclusão cancelada');
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'Colaborador',
            dataIndex: 'name',
        },
        {
            title: '',
            render: (retorno: any) => (
                <Popconfirm
                    title="Você deseja excluir esse integrante?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Sim"
                    cancelText="Não"
                >
                    <Button type='link'>Excluir</Button>
                </Popconfirm>
            )
        },
    ];


    return (
        <Container>
            <Section style={{ width: '100%' }}>
                <h2>Permissões</h2>
                <Table dataSource={data} pagination={{ position: [] }}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.lastName}</p>,
                        rowExpandable: record => record.lastName !== 'Not Expandable',
                    }}>
                    <Column
                        title="Equipe"
                        dataIndex="tags"
                        key="tags"
                    />
                    <Column title="Participantes" render={(text, record) => (
                        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            </Tooltip>
                            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                    )} />
                    <Column
                        title="Opções"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Button type='link' onClick={showModal}>
                                    Editar
                                    </Button>
                                <Popconfirm
                                    title="Você deseja excluir essa equipe?"
                                    onConfirm={confirm}
                                    onCancel={cancel}
                                    okText="Sim"
                                    cancelText="Não"
                                >
                                    <Button type='link'>Excluir</Button>
                                </Popconfirm>

                            </Space>
                        )}
                    />
                </Table>

                <Modal title="Edição de equipe" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Table pagination={{ position: [] }} rowSelection={rowSelection} columns={columns} dataSource={data2} />
                </Modal>

            </Section>
        </Container>
    );
}

export default UserProfile;