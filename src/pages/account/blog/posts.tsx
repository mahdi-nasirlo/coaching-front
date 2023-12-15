import type {GetServerSideProps, NextPage} from "next";
import LayoutAccount from "@layout/layout-account";
import BlogPost from "@containers/Account/blog-post";

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
};

const Dashboard: PageProps = () => {

    return (
        <>
            <BlogPost/>
        </>
    );
};

Dashboard.Layout = LayoutAccount;

export const getServerSideProps: GetServerSideProps = async () => {
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
