import type { GetServerSideProps, NextPage } from "next";
import LayoutAccount from "@layout/layout-account";
import AddMeeting from "@containers/account/meeting/create";

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
};

const Dashboard: PageProps = () => {
    return (
        <>
            <AddMeeting />
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
            },
        },
    };
};

export default Dashboard;
