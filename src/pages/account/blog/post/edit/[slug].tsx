import React from 'react';
import type {GetServerSideProps, NextPage} from "next";
import LayoutAccount from "@layout/layout-account";
import EditForm from "@containers/account/blog-post/edit/edit-form";
import {motion} from "framer-motion";
import {accountSection} from "@utils/variants";

type PageProps = NextPage & {
    data: {
        slug: string
    }
    Layout: typeof LayoutAccount;
};


const EditPage = ({data: {slug}}: PageProps) => {

    console.log(slug)


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={accountSection}
        >
            <EditForm name={slug}/>
        </motion.div>
    );
};

EditPage.Layout = LayoutAccount

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {slug} = context.query as { slug: string }

    // const getPost = await getAdminBlogPost(slug)

    // if (getPost?.status !== 200) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
        props: {
            data: {
                slug,
                post: {}
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
            },
        },
    };
};


export default EditPage;