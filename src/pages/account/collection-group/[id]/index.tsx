import type { NextPage } from "next";
import LayoutAccount from "@layout/layout-account";
import CollectionList from "@containers/account/collection";
import {
    DehydratedState,
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import { collectionConstance } from "@/constants/collection";
import { getCollectionWithChild } from "@/lib/api/collection";

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
    collectionGroupID: number;
    dehydratedState: DehydratedState;
};

const Dashboard = (props: PageProps) => {
    return (
        <>
            <HydrationBoundary state={props.dehydratedState}>
                <CollectionList collectionGroupID={props.collectionGroupID} />
            </HydrationBoundary>
        </>
    );
};

Dashboard.Layout = LayoutAccount;

export const getServerSideProps = async ({
    params,
}: {
    params: { id: number };
}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [collectionConstance.getAllCollectionWithCild.url],
        queryFn: () =>
            getCollectionWithChild({ collection_group_id: params.id }),
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            collectionGroupID: params.id,
            layout: {
                headerShadow: true,
                headerFluid: false,
            },
        },
    };
};

export default Dashboard;
