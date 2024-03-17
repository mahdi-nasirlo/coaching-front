import React from "react";
import { motion } from "framer-motion";
import { accountSection } from "@utils/variants";
import NavigateItem from "@components/account/navigate-item";
import CollectionActions from "./collection-actions";
import CollectionList from "./collection-list";

const Index = ({
    collectionGroupID,
    collectionID,
}: {
    collectionID?: number;
    collectionGroupID: number;
}) => {
    return (
        <>
            <div className="">
                <NavigateItem
                    title={"Collection Group"}
                    action={
                        <>
                            <CollectionActions
                                collectionGroupID={collectionGroupID}
                                collectionID={collectionID}
                            />
                        </>
                    }
                />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accountSection.variants}
                >
                    <CollectionList
                        collectionGroupID={collectionGroupID}
                        collectionID={collectionID}
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Index;
