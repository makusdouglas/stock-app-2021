import React from 'react';
import { Space } from 'antd';
import { Line } from '@ant-design/charts';

import ContentBox from '../../../../components/ContentBox';
import { LineConfig } from '@ant-design/charts/es/line';
import { Content } from 'antd/lib/layout/layout';
import DemoLine from './Charts/DemoLine';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
    const data = [
        { year: '1991', value: 3 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];

    const config: LineConfig = {
        data,
        height: 150,
        width: 200,
        xField: 'year',
        yField: 'value',
        point: {
            size: 5,
            shape: 'diamond',
        },


    };
    return (
        <React.Fragment>
            <Space direction='horizontal' size='middle'>
                <Content style={{
                    background: '#fff'
                }}>
                    <DemoLine />
                </Content>
                <Content>
                    <DemoLine />
                </Content>
            </Space>
            <ContentBox cProps={{ minHeight: 400 }}>
                <h1>Dashboard</h1>
                <Line {...config} />
            </ContentBox>
        </React.Fragment>

    );
}

export default Dashboard;