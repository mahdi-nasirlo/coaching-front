import type { GetServerSideProps, NextPage } from "next";
import LayoutAccount from "@layout/layout-account";
import CollectionGroup from "@containers/account/collection-group";
import {
    DehydratedState,
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import { collectionConstance } from "@/constants/collection";
import { getCollectionGroupWithChild } from "@/lib/api/collection";

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
    dehydratedState: DehydratedState;
};

const Dashboard = (props: PageProps) => {
    return (
        <>
            <HydrationBoundary state={props.dehydratedState}>
                <CollectionGroup />
            </HydrationBoundary>
        </>
    );
};

Dashboard.Layout = LayoutAccount;

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [collectionConstance.getAllCollectionGroup.url],
        queryFn: getCollectionGroupWithChild,
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            layout: {
                headerShadow: true,
                headerFluid: false,
            },
        },
    };
};

export default Dashboard;
