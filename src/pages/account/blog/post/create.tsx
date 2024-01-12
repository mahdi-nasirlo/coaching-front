import React from 'react';
import type {GetServerSideProps, NextPage} from "next";
import LayoutAccount from "@layout/layout-account";
import {motion} from "framer-motion";
import {accountSection} from "@utils/variants";
import {Button} from "@ui/v2/button";
import NavigateItem from "@components/account/navigate-item";
import {blogApiUrl} from "@/constants/blogApiUrl";
import CreateForm from "@containers/account/blog-post/create/create-form";
import Router from "next/router";

const apiData = blogApiUrl.post.admin

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
};

const CreatePage: PageProps = () => {

    return (
        <div>
            <NavigateItem
                title={apiData.create.pageName}
                description={{
                    currentPage: apiData.create.pageName,
                    pages: [{path: apiData.getPage.pageUrl, label: apiData.getPage.pageName}],
                    showTitle: false
                }}
                action={<>
                    <Button variant="ghost" onClick={() => Router.push(apiData.getPage.pageUrl)} size="sm">back</Button>
                </>}
            />
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={accountSection.variants}
            >
                <CreateForm/>
            </motion.div>
        </div>
    );
};

CreatePage.Layout = LayoutAccount

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


export default CreatePage;