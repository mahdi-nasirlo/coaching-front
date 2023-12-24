import React from 'react';
import CreateForm from "@containers/account/blog-post/create/create-form";
import {motion} from "framer-motion";
import {DataTable} from "@containers/account/blog-post/data-table";
import {accountSection} from "@utils/variants";

const Index = () => {

    return (
        <div>
            <motion.div
                className="flex flex-col gap-5"
                variants={accountSection}
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
                variants={accountSection}
                transition={{duration: 0.5}}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="tw-mb-8">
                    <DataTable/>
                </div>
            </motion.div>
        </div>
    )
};

export default Index;