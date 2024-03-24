import { ReactNode } from "react";
import ScrollToTop from "@ui/scroll-to-top";
import Header from "../headers/header-01";
import Footer from "../footers/footer-01";
import { AccountItemMenu, SidebarNav } from "@components/sidebar-nav";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

type TProps = {
    children: ReactNode;
    headerShadow?: boolean;
    headerFluid?: boolean;
    headerMode?: "light" | "dark";
    headerTransparent?: boolean;
    footerMode?: "light" | "dark";
};

const sidebarNavItems: AccountItemMenu[] = [
    {
        title: "Profile",
        href: "/account/dashboard",
    },
    {
        title: "Blog Posts",
        href: "/account/blog/post",
        regex: new RegExp("^\\/account\\/blog\\/post(\\/.*)?$"),
    },
    {
        title: "Collection",
        href: "/account/collection-group",
        regex: new RegExp("^\\/account\\collection"),
    },
    {
        title: "Coaches",
        href: "/account/coaches",
    },
    {
        title: "Schedule Meeting",
        href: "/account/meeting/create",
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
];

const LayoutAccount = ({
    children,
    headerShadow,
    headerFluid,
    headerMode,
    headerTransparent,
    footerMode = "dark",
}: TProps) => {
    const router = useRouter();

    return (
        <>
            <Header
                shadow={headerShadow}
                fluid={headerFluid}
                transparent={headerTransparent}
                mode={headerMode}
            />
            <div className="tw-bg-gray-50 tw-min-h-[60vh]">
                <main className="tw-relative tw-container">
                    <div className="tw-space-y-6 tw-py-10 tw-pb-16 md:tw-block">
                        <div className="tw-flex tw-flex-col tw-space-y-8 lg:tw-flex-row lg:tw-space-x-12 lg:tw-space-y-0">
                            <aside className="tw--mx-4 lg:tw-w-1/5">
                                <SidebarNav items={sidebarNavItems} />
                            </aside>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={router.route}
                                    initial="initialState"
                                    animate="animateState"
                                    exit="exitState"
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeOut",
                                    }}
                                    variants={{
                                        initialState: {
                                            opacity: 0,
                                            x: "10%",
                                        },
                                        animateState: {
                                            opacity: 1,
                                            x: "0%",
                                        },
                                        exitState: {
                                            opacity: 0.1,
                                            x: "-10%",
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                    className="tw-flex-1"
                                >
                                    {children}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </main>
            </div>
            <Footer mode={footerMode} />
            <ScrollToTop />
        </>
    );
};

export default LayoutAccount;
