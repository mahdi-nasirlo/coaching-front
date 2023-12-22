import {ReactNode} from "react";
import ScrollToTop from "@ui/scroll-to-top";
import Header from "../headers/header-01";
import Footer from "../footers/footer-01";
import {SidebarNav} from "@components/sidebar-nav";

type TProps = {
    children: ReactNode;
    headerShadow?: boolean;
    headerFluid?: boolean;
    headerMode?: "light" | "dark";
    headerTransparent?: boolean;
    footerMode?: "light" | "dark";
};

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/account/dashboard",
    },
    {
        title: "Blog Posts",
        href: "/account/blog/posts",
    },
    {
        title: "Appearance",
        href: "/examples/forms/appearance",
    },
    {
        title: "Notifications",
        href: "/examples/forms/notifications",
    },
    {
        title: "Display",
        href: "/examples/forms/display",
    },
]

const LayoutAccount = ({
                           children,
                           headerShadow,
                           headerFluid,
                           headerMode,
                           headerTransparent,
                           footerMode = "dark",
                       }: TProps) => {
    return (
        <>
            <Header
                shadow={headerShadow}
                fluid={headerFluid}
                transparent={headerTransparent}
                mode={headerMode}
            />
            <div className="tw-bg-gray-50">
                <main className="tw-relative tw-container">
                    <div className="tw-space-y-6 tw-p-10 tw-pb-16 md:tw-block">
                        <div
                            className="tw-flex tw-flex-col tw-space-y-8 lg:tw-flex-row lg:tw-space-x-12 lg:tw-space-y-0">
                            <aside className="tw--mx-4 lg:tw-w-1/5">
                                <SidebarNav items={sidebarNavItems}/>
                            </aside>
                            <div className="tw-flex-1">{children}</div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer mode={footerMode}/>
            <ScrollToTop/>
        </>
    );
};

export default LayoutAccount;
