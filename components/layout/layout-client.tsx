"use client"

import React from "react";
import {Layout} from "antd";
import LayoutHeader from "@/components/layout/header";

const {Header, Footer, Content} = Layout


const contentStyle: React.CSSProperties = {
    minHeight: 120,
    lineHeight: '120px',
};


function LayoutClient({children}: { children: React.ReactNode }) {
    return <>
        <LayoutHeader/>
        <Content style={contentStyle}>{children}</Content>
        <Footer>Footer</Footer>
    </>
}


export default LayoutClient