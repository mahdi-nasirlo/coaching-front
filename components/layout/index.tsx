import React from "react";
import LayoutClient from "@/components/layout/layout-client";

function AppLayout({children}: { children: React.ReactNode }) {

    return <>
        <LayoutClient>
            {children}
        </LayoutClient>
    </>
}

export default AppLayout;