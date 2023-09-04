import React from "react";
import {Layout} from "antd";
import LayoutHeader from "@/components/layout/header";

function AppLayout({children}: { children: React.ReactNode }) {

    return <>
        <Layout>
            <LayoutHeader/>
            <div>{children}</div>
            {/*<LayoutFooter/>*/}
        </Layout>
    </>
}

export default AppLayout;