import React, {FC, useState} from "react";
import {Table, Tabs} from 'antd'
import type {ColumnsType} from 'antd/es/table';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const Theme: FC = () => {

    const [data] = useState<DataType[]>([])
    return (
        <>
            <Tabs>
                <Tabs.TabPane tab="全部" key="0"/>
                <Tabs.TabPane tab="未开始" key="1"/>
                <Tabs.TabPane tab="进行中" key="2"/>
                <Tabs.TabPane tab="已结束" key="3"/>
                <Tabs.TabPane tab="已关闭" key="4"/>
            </Tabs>
            <Table columns={columns} dataSource={data}/>
        </>

    )
}

export default Theme