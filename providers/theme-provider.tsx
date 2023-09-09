'use client';


import {ConfigProvider} from "antd";
import customTheme from "@/theme/theme";
import fa_IR from "antd/locale/fa_IR";
import {StyleProvider} from "@ant-design/cssinjs";

const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    return <>
        <ConfigProvider theme={customTheme} direction="rtl" locale={fa_IR}>
            <StyleProvider hashPriority="high">
                {children}
            </StyleProvider>
        </ConfigProvider>
    </>
};

export default ThemeProvider;