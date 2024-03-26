import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import LayoutAccount from "@layout/layout-account";
import { getAdminCoach } from "@/lib/api/coach";
import ShowCoach from "@containers/account/coaches/show";
import { z } from "zod";
import { coachApiUrl } from "@/constants/coach";
import { DehydratedState, HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

type PageProps = NextPage & {
    data: z.infer<typeof coachApiUrl.adminGet.response.shape.data>;
    Layout: typeof LayoutAccount;
    dehydratedState: DehydratedState
};

const EditPage = (props: PageProps) => {
    return (
        <HydrationBoundary state={props.dehydratedState}>
            <ShowCoach coachId={props.data.id} />
        </HydrationBoundary>
    );
};

EditPage.Layout = LayoutAccount;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const getCoach = await getAdminCoach(id as string);

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [coachApiUrl.adminGet.url, id],
        queryFn: () => getCoach
    });

    if (getCoach?.status == 404) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: getCoach?.data,
            dehydratedState: dehydrate(queryClient),
            layout: {
                headerShadow: true,
                headerFluid: false,
            },
        },
    };
};

export default EditPage;
