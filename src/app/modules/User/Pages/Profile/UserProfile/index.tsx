import React from 'react';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { Form, Select } from 'antd'
import { alterFactory } from '@Module/User/slice';
import { createDraft } from 'immer';
// import { Container } from './styles';

const UserProfile: React.FC = () => {
    const { factory } = useAppSelector(state => state.app);
    const { fabrica } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const handleFactoryChange = (value: string) => {
        dispatch(alterFactory({ factoryId: Number(value) }))
    }
    const sortFactory = createDraft(factory)


    return (
        <React.Fragment>
            <h1>Seleção de Fábrica</h1>
            <Form layout='vertical'>
                <Form.Item
                    required
                    label='Selecione a fábrica:'
                    style={{ maxWidth: 600 }}
                >
                    <Select
                        onChange={e => handleFactoryChange(e)}
                        value={fabrica?.toString() === '0' ? undefined : fabrica?.toString()}
                        placeholder='Selecione ...'
                    >
                        {sortFactory.sort((strA, strB) => (strA.descricao.localeCompare(strB.descricao)) - (strB.descricao.localeCompare(strA.descricao)))
                            .map((value, index, arr) => {
                                return (
                                    <Select.Option
                                        value={value.codigo.toString()}
                                    >
                                        {value.descricao}
                                    </Select.Option>
                                )
                            }
                            )}
                    </Select>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
}

export default UserProfile;