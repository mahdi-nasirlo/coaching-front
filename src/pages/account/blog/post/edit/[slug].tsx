import React from 'react';
import type {GetServerSideProps, NextPage} from "next";
import LayoutAccount from "@layout/layout-account";
import EditForm from "@containers/account/blog-post/edit/edit-form";
import {motion} from "framer-motion";
import {accountSection} from "@utils/variants";
import {Button} from "@ui/v2/button";
import NavigateItem from "@components/account/navigate-item";
import {getAdminBlogPost} from "@/lib/api/blog";
import {blogApiUrl} from "@/constants/blogApiUrl";

const apiData = blogApiUrl.post.admin

type PageProps = NextPage & {
    data: {
        slug: string,
        post: typeof apiData.getPage.type
    }
    Layout: typeof LayoutAccount;
};

const EditPage = ({data: {slug, post}}: PageProps) => {

    return (
        <div>
            <NavigateItem
                title="Edit Blog Post"
                description={{
                    currentPage: slug,
                    pages: [{path: apiData.getPage.pageUrl, label: apiData.getPage.pageName}],
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
                <EditForm post={post}/>
            </motion.div>
        </div>
    );
};

EditPage.Layout = LayoutAccount

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {slug} = context.query as { slug: string }

    const getPost = await getAdminBlogPost(slug, context)

    if (!getPost?.data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: {
                slug,
                post: getPost?.data
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
            },
        },
    };
};


export default EditPage;