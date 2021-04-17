import React from 'react';
import { Card, Space, Row, Col } from 'antd';
import { Line } from '@ant-design/charts';

import ContentBox from '../../../../components/ContentBox';
import { LineConfig } from '@ant-design/charts/es/line';
import { Content } from 'antd/lib/layout/layout';
import DemoLine from './Charts/DemoLine';

const Dashboard: React.FC = () => {
    const data = [
        { Ano: '2018', Quantidade: 3 },
        { Ano: '2019', Quantidade: 7 },
        { Ano: '2020', Quantidade: 9 },
        { Ano: '2021', Quantidade: 13 },
    ];

    const config: LineConfig = {
        data,
        height: 120,
        width: 200,
        xField: 'Ano',
        yField: 'Quantidade',
        point: {
            size: 5,
            shape: 'diamond',
        },

    };
    return (
        <Content>
            <Row gutter={16} style={{ marginBottom: 20 }}>
                <Col span={6}>
                    <Card title="Produção (TON/ano)" bordered={false} style={{ height: 240, flex: 1 }}>
                        <Line {...config} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Analytic" bordered={false} style={{ height: 240, flex: 1 }}>
                        <DemoLine colorArea='#0f0' />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Analytic" bordered={false} style={{ height: 240, flex: 1 }}>
                        <DemoLine colorArea='#f00' />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Analytic" bordered={false} style={{ height: 240, flex: 1 }}>
                        <DemoLine />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{ marginBottom: 20 }}>
                <Col span={12}>
                    <ContentBox cProps={{ minHeight: 400 }}>
                        <h1>Analytics</h1>
                        <Line {...config} height={400} />
                    </ContentBox>
                </Col>
                <Col span={12}>
                    <ContentBox cProps={{ minHeight: 400 }}>
                        <h1>Analytics</h1>
                        <Line {...config} height={400} />
                    </ContentBox>
                </Col>
            </Row>
        </Content>

    );
}

export default Dashboard;