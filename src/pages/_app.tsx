import {ElementType, useEffect} from "react";
import {useRouter} from "next/router";
import type {AppProps} from "next/app";
import SEO from "@components/seo/deafult-seo";
import FallbackLayout from "@layout/fallback";
import {Toaster} from "react-hot-toast";


import "@assets/css/font-awesome.min.css";
import "@assets/css/font-linea.css";
import "@assets/css/fonts.css";
import "@assets/css/tailwind.css";
import "@assets/css/swiper.css";

import {UIProvider} from "../contexts/ui-context";
import {UserProvider} from "../contexts/user-context";
import QueryClientProvider from "../providers/query-client-provider";
import AuthProvider from "../providers/auth-provider";

interface CustomAppProps extends Omit<AppProps, "Component"> {
    Component: AppProps["Component"] & { Layout: ElementType };
    pageProps: {
        [key: string]: unknown;
    };
}

const MyApp = ({Component, pageProps}: CustomAppProps) => {
    const router = useRouter();
    const Layout = Component.Layout || FallbackLayout;
    const layoutProps =
        typeof pageProps.layout === "object" ? pageProps.layout : {};

    useEffect(() => {

        document.activeElement instanceof HTMLElement &&
        document.activeElement.blur();
    }, [router]);

    useEffect(() => {
        document.body.className = (pageProps.className as string) || "";
    });

    return (
        <AuthProvider>
            <QueryClientProvider>
                <UIProvider>
                    <UserProvider>
                        <Layout {...layoutProps}>
                            <SEO/>
                            <Component {...pageProps} />
                            <Toaster/>
                        </Layout>
                    </UserProvider>
                </UIProvider>
            </QueryClientProvider>
        </AuthProvider>
    );
};

export default MyApp;
