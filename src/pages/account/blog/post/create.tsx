import type {GetServerSideProps, NextPage} from "next";
import LayoutAccount from "@layout/layout-account";
import {motion} from "framer-motion";
import {accountSection} from "@utils/variants";
import React from "react";
import NavigateItem from "@components/account/navigate-item";
import {Button} from "@ui/v2/button";
import {blogApiUrl} from "../../../../constants/blogApiUrl";
import CreateForm from "@containers/account/blog-post/create/create-form";

const apiData = blogApiUrl.post.admin

type PageProps = NextPage & {
    Layout: typeof LayoutAccount;
};

const Create: PageProps = () => {

    return (
        <>
            <div>
                <NavigateItem
                    title="Edit Blog Post"
                    description={{
                        currentPage: "create",
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
                    <CreateForm/>
                </motion.div>
            </div>
        </>
    );
};

Create.Layout = LayoutAccount;

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

export default Create;
