import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import { AreaConfig } from '@ant-design/charts/es/area';

const DemoLine: React.FC<{ colorArea?: string }> = ({ colorArea }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    var config: AreaConfig = {
        data: data,
        xField: 'Date',
        yField: 'scales',
        height: 120,
        xAxis: { tickCount: 5 },
        areaStyle: function areaStyle() {
            return { fill: colorArea || '#1890ff' };
        },
    };
    return <Area {...config} />;
};

export default DemoLine;