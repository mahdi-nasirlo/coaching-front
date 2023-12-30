import React from 'react';
import {motion} from "framer-motion";
import {DataTable} from "@containers/account/blog-post/data-table";
import {accountSection} from "@utils/variants";
import NavigateItem from "@components/account/navigate-item";
import {blogApiUrl} from "../../../constants/blogApiUrl";
import {Button} from "@ui/v2/button";
import Router from "next/router";

const apiData = blogApiUrl.post.admin

const Index = () => {


    return (
        <>
            <div>
                <div>
                    <NavigateItem
                        title="Blog Post List"
                        action={<>
                            <Button
                                onClick={() => Router.push(apiData.create.pageUrl)}
                                variant="secondary"
                                className=""
                                size="sm"
                            >
                                create
                            </Button>
                        </>}
                    />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={accountSection.variants}
                    >
                        <DataTable/>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Index;