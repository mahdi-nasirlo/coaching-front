import React from "react";
import { motion } from "framer-motion";
import { accountSection } from "@utils/variants";
import NavigateItem from "@components/account/navigate-item";
import CollectionGroupList from "./collection-group-list";
import CollectionGroupAdd from "./collection-group-add";

const Index = () => {
    return (
        <>
            <div className="">
                <NavigateItem
                    title={"Collection Group"}
                    action={
                        <>
                            <CollectionGroupAdd />
                        </>
                    }
                />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accountSection.variants}
                >
                    <CollectionGroupList />
                </motion.div>
            </div>
        </>
    );
};

export default Index;
