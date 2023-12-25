import React from 'react';
import type {GetServerSideProps, NextPage} from "next";
import LayoutAccount from "@layout/layout-account";
import EditForm from "@containers/account/blog-post/edit/edit-form";
import {AnimatePresence, motion} from "framer-motion";
import {accountSection} from "@utils/variants";
import {Button} from "@ui/v2/button";
import NavigateItem from "@components/account/navigate-item";
import {blogApiUrl} from "../../../../../constants/blogApiUrl";

type PageProps = NextPage & {
    data: {
        slug: string
    }
    Layout: typeof LayoutAccount;
};

const apiData = blogApiUrl.post.admin
const EditPage = ({data: {slug}}: PageProps) => {

    console.log(slug)


    return (
        <AnimatePresence>
            <NavigateItem
                title="Edit Blog Post"
                description={{
                    currentPage: slug,
                    pages: [{path: apiData.getPage.pageName, label: apiData.getPage.pageName}],
                    showTitle: false
                }}
                action={<>
                    <Button variant="link" className="tw-text-red-500" size="sm">delete</Button>
                </>}
            />
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={accountSection.variants}
            >
                <EditForm/>
            </motion.div>
        </AnimatePresence>
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