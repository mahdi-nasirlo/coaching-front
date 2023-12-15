import type {GetStaticProps, NextPage} from "next";
import SEO from "@components/seo/page-seo";
import Breadcrumb from "@components/breadcrumb";
import ProfileBio from "@containers/profile/bio";
import {useMount} from "@hooks";
import LayoutAccount from "@layout/layout-account";

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
};

const Dashboard: PageProps = () => {
    const mounted = useMount();

    if (!mounted) return null;

    return (
        <>
            <SEO title="Account Dashboard"/>
            <Breadcrumb
                pages={[{path: "/", label: "home"},]}
                currentPage="Account Dashboard"
                showTitle={false}
            />
            <ProfileBio/>
        </>
    );
};

Dashboard.Layout = LayoutAccount;

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default Dashboard;
