import {Link, Outlet} from "@remix-run/react";
import {FC} from 'react'
import {Menu, Layout} from 'antd'

const Dashboard: FC = () => {

    return (
        <Layout className="h-full">
            <Layout.Header>
                <div>logo</div>
            </Layout.Header>
            <Layout>
                <Layout.Sider theme="light">
                    <Menu theme="light" mode="inline" items={[]}></Menu>
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