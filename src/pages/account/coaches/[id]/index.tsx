import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import LayoutAccount from "@layout/layout-account";
import EditForm from "@containers/account/blog-post/edit/edit-form";
import { motion } from "framer-motion";
import { accountSection } from "@utils/variants";
import { Button } from "@ui/v2/button";
import NavigateItem from "@components/account/navigate-item";
import { blogApiUrl } from "@/constants/blogApiUrl";
import { getAdminCoach } from "@/lib/api/coach";
import ShowCoach from "@containers/account/coaches/show";

type PageProps = NextPage & {
    data: {
        id: number;
        // post: typeof apiData.getPage.type;
    };
    Layout: typeof LayoutAccount;
};

const EditPage = (props: PageProps) => {
    return (
        <div>
            <ShowCoach coachId={props.data.id} />
        </div>
    );
};

EditPage.Layout = LayoutAccount;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const getCoach = await getAdminCoach(id as string);

    // if (!getPost?.data) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
        props: {
            data: {
                id: id || false,
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
            },
        },
    };
};

export default EditPage;
