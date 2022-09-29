import {Outlet, Link} from "@remix-run/react";
import type {FC} from 'react'
import {Menu, Layout, Button} from 'antd'

const Dashboard: FC = () => {

    return (
        <Layout className="h-full">
            <Layout.Header>
                <div>logo</div>
            </Layout.Header>
            <Layout>
                <Layout.Sider theme="light">
                    <div>
                        <Button block>创建活动</Button>
                    </div>
                    <Menu theme="light" mode="inline">
                        <Menu.Item>
                            <Link to={'/admin'}>首页</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/admin'}>活动模板</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/admin'}>活动管理</Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
                <Layout>
                    <Layout.Content>
                        Content
                        <Outlet/>
                    </Layout.Content>
                    <Layout.Footer>
                        Footer
                    </Layout.Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard