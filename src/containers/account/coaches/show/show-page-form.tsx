"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { accountSection } from "@utils/variants";
import { Form } from "@components/ui/v2/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/ui/v2/button";
import { useUpdateAdminCoach } from "hooks/api/coach";
import { coachApiUrl } from "@/constants/coach";
import MeetingFormFileds from "./meeting-form-fields";

const formSchema = coachApiUrl.adminUpdate.type.request;

const ShowPageForm = ({ data: coachData }: { data: z.infer<typeof coachApiUrl.adminGet.response.shape.data> | undefined }) => {

    const { mutateAsync } = useUpdateAdminCoach(coachData?.id);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        //@ts-ignore
        defaultValues: coachData
    });

    const handleOnSubmit = (
        data: z.infer<typeof formSchema>,
        e: React.BaseSyntheticEvent<any> | undefined
    ) => {
        e?.preventDefault();

        mutateAsync(data);
    };


    useEffect(() => {
        console.log(coachData);

        if (coachData) {
            form.setValue("name", coachData.name)
            form.setValue("phone_number", coachData.phone_number)
            form.setValue("about_me", coachData?.about_me as string)
            form.setValue("prices", coachData.prices)
            form.setValue("resume", coachData.resume || "")
            form.setValue("education_record", coachData.education_record || "")
        }
    }, [coachData])

    return (
        <>
            <div className="">
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

export default ShowPageForm;
