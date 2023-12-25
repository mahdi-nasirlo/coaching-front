import React from 'react';
import CreateForm from "@containers/account/blog-post/create/create-form";
import {motion} from "framer-motion";
import {DataTable} from "@containers/account/blog-post/data-table";
import {accountSection} from "@utils/variants";

const Index = () => {


    return (
        <>
            <div className="">
                <motion.div
                    key={"create"}
                    className="flex flex-col gap-5"
                    variants={accountSection.variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="tw-mb-8">
                        <CreateForm/>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-5"
                    variants={accountSection.variants}
                    transition={accountSection.transition}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="tw-mb-8">
                        <DataTable/>
                    </div>
                </motion.div>
            </div>
        </>
    )
};

export default Index;