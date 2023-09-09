import React from "react";
import { Layout } from "antd";
import LayoutHeader from "@/components/layout/header";
import ThemeProvider from "@/providers/theme-provider";

function AppLayout({ children }: { children: React.ReactNode }) {

    return <>
        <ThemeProvider>
            <div>
                <LayoutHeader />
                <div>{children}</div>
                {/*<LayoutFooter/>*/}
            </div>
        </ThemeProvider>
    </>
}

export default AppLayout;