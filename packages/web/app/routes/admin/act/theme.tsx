import {FC} from "react";
import { Tabs } from 'antd'

const Theme: FC = () => {

    return (
        <Tabs>
            <Tabs.TabPane tab="全部" key="0" />
            <Tabs.TabPane tab="未开始" key="1" />
            <Tabs.TabPane tab="进行中" key="2" />
            <Tabs.TabPane tab="已结束" key="3" />
            <Tabs.TabPane tab="已关闭" key="4" />
        </Tabs>
    )
}

export default Theme