'use client';


import {ConfigProvider} from "antd";
import customTheme from "@/theme/theme";
import fa_IR from "antd/locale/fa_IR";

const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    return <>
        <ConfigProvider theme={customTheme} direction="rtl" locale={fa_IR}>
            {children}
        </ConfigProvider>
    </>
};

export default ThemeProvider;