"use client";

import NavigateItem from "@components/account/navigate-item";
import { useGetAdminCoach } from "hooks/api/coach";
import { motion } from "framer-motion";
import React from "react";
import { accountSection } from "@utils/variants";
import ShowPageAction from "./show-page-action";
import ShowPageForm from "./show-page-form";


export default function ShowCoach({ coachId }: { coachId: number }) {
    const { data } = useGetAdminCoach(coachId);

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
            >
                <ShowPageForm data={data} />
            </motion.div>
        </>
    );
}
