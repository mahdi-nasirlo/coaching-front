import type { NextPage } from "next";
import LayoutAccount from "@layout/layout-account";
import CollectionList from "@containers/account/collection";
import { collectionConstance } from "@/constants/collection";
import {
    getBreadcrumbCollection,
    getCollectionWithChild,
} from "@/lib/api/collection";
import {
    DehydratedState,
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
    collectionGroupID: number;
    collectionID: number;
    dehydratedState: DehydratedState;
};

const Dashboard = (props: PageProps) => {
    return (
        <>
            <HydrationBoundary state={props.dehydratedState}>
                <CollectionList
                    collectionGroupID={props.collectionGroupID}
                    collectionID={props.collectionID}
                />
            </HydrationBoundary>
        </>
    );
};

Dashboard.Layout = LayoutAccount;

export const getServerSideProps = async ({
    params,
}: {
    params: { collectionGroupID: number; collectionID: number };
}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [collectionConstance.getAllCollectionWithCild.url],
        queryFn: () =>
            getCollectionWithChild({
                collection_group_id: params.collectionGroupID,
                collection_id: params.collectionID,
            }),
    });

    await queryClient.prefetchQuery({
        queryKey: [
            collectionConstance.getBreadcrumbCollection.url,
            params.collectionID,
        ],
        queryFn: () => getBreadcrumbCollection(params.collectionID),
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            collectionGroupID: params.collectionGroupID,
            collectionID: params.collectionID,
            layout: {
                headerShadow: true,
                headerFluid: false,
            },
        },
    };
};

export default Dashboard;
