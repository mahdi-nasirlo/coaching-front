"use client";

import React from "react";
import { motion } from "framer-motion";
import { accountSection } from "@utils/variants";
import NavigateItem from "@components/account/navigate-item";
import MeetingFormFileds from "../meeting-form-fields";
import { Form } from "@components/ui/v2/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/ui/v2/button";
import { useCreateAdminCoach } from "hooks/api/coach";
import { coachApiUrl } from "@/constants/coach";

// calender
// import FullCalendar from "@fullcalendar/react";
// import faLocale from "@fullcalendar/core/locales/fa";
// import dayGridPlugin from "@fullcalendar/daygrid";

const formSchema = coachApiUrl.adminCreate.type.request;

const Index = () => {
    const { mutateAsync } = useCreateAdminCoach();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleOnSubmit = (
        data: z.infer<typeof formSchema>,
        e: React.BaseSyntheticEvent<any> | undefined
    ) => {
        e?.preventDefault();

        mutateAsync(data);
    };

    return (
        <>
            <div className="">
                <NavigateItem title={"Add Meeting"} />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accountSection.variants}
                >
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleOnSubmit)}
                            className="grid"
                        >
                            <MeetingFormFileds form={form} />
                            <div className="sticky_navigation_bar tw-mt-3">
                                <Button variant="secondary" className="mr-5">
                                    save
                                </Button>
                            </div>
                        </form>
                    </Form>
                </motion.div>
            </div>
        </>
    );
};

export default Index;
