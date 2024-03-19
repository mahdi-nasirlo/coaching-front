"use client";

import NavigateItem from "@components/account/navigate-item";
import { useGetAdminCoach } from "hooks/api/coach";
import { motion } from "framer-motion";
import React from "react";
import { accountSection } from "@utils/variants";
import { Button } from "@components/ui/v2/button";
import ShowPageAction from "./show-page-action";

export default function ShowCoach({ coachId: id }: { coachId: number }) {
    const { data } = useGetAdminCoach(id);

    return (
        <>
            <NavigateItem
                title={"Coach " + data?.name + " Info"}
                // description={{
                // currentPage: "",
                // pages: [
                //     {
                //         path: apiData.getPage.pageUrl,
                //         label: apiData.getPage.pageName,
                //     },
                // ],
                // showTitle: false,
                // }}
                action={<ShowPageAction data={data} />}
            />
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={accountSection.variants}
            ></motion.div>
        </>
    );
}
