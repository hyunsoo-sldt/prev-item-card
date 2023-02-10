import React, { useState } from "react";
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Layout, Menu, theme } from "antd";
import Logo from "./components/Logo";
import Dashboard from "./components/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import Global from "./components/Global";
import Bill from "./components/Bill";
import Tom from "./components/Tom";
import Alex from "./components/Alex";
import ResistItemCard from "./prototype/ResistItemCard";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("글로벌", "/", <PieChartOutlined />),
    getItem("대시보드", "/dashboard", <DesktopOutlined />),
    getItem("회원", "sub1", <UserOutlined />, [getItem("Tom", "/user/tom"), getItem("Bill", "/user/bill"), getItem("Alex", "/user/alex")]),
    getItem("제품", "sub2", <TeamOutlined />, [getItem("아이템 카드 등록", "/item-card/resist"), getItem("아이템 카드", "8")]),
    getItem("보관 판매", "9", <FileOutlined />),
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();
    const { token } = theme.useToken();

    console.log(token);

    return (
        <Layout>
            <Layout.Header
                style={{
                    padding: 0,
                    background: token.colorBgContainer,
                    borderBottom: `2px solid ${token.colorBgLayout}`,
                }}>
                <Logo />
            </Layout.Header>
            <Layout className="site-layout" hasSider style={{ minHeight: "100vh" }}>
                <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div
                        style={{
                            height: 3,
                            margin: 0,
                        }}
                    />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                        items={items}
                        onClick={({ key }) => {
                            navigate(key);
                        }}
                    />
                </Layout.Sider>
                <Routes>
                    <Route path={"/"} element={<Global />}></Route>
                    <Route path={"/dashboard"} element={<Dashboard />}></Route>
                    <Route path={"/user/bill"} element={<Bill />}></Route>
                    <Route path={"/user/tom"} element={<Tom />}></Route>
                    <Route path={"/user/alex"} element={<Alex />}></Route>
                    <Route path={"/item-card/resist"} element={<ResistItemCard />}></Route>
                </Routes>
            </Layout>
        </Layout>
    );
};

export default App;
