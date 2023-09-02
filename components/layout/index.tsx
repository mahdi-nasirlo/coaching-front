import React from "react";
import LayoutClient from "@/components/layout/layout-client";
import {Layout} from "antd";

function AppLayout({children}: { children: React.ReactNode }) {

    return <>
        <Layout>
            <LayoutClient>
                {children}
            </LayoutClient>
        </Layout>
    </>
}

export default AppLayout;