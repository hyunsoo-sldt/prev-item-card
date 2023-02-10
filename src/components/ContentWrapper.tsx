import React from "react";
import { Col, Row } from "antd";
import { ThemeProvider } from "../utils/themeColor";
import { Content } from "antd/lib/layout/layout";

type ContentWrapperProps = {
    children: React.ReactNode;
};

const ContentWrapper = (props: ContentWrapperProps) => {
    const { children } = props;
    return (
        <Content style={{ margin: 0 }}>
            <Row
                justify={"center"}
                style={{
                    border: "1px solid red",
                    minHeight: 360,
                    background: ThemeProvider().colorBgContainer,
                }}>
                <Col span={22} style={{ border: "1px solid blue", padding: "24px" }}>
                    {children}
                </Col>
            </Row>
        </Content>
    );
};

export default ContentWrapper;
