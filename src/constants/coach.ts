import { generalResponseZod, paginationReponseZod } from "@/type/general";
import { z } from "zod";

const getPageItem = z.object({
    id: z.number(),
    user_id: z.number(),
    phone_number: z.string(),
    status: z.number(),
    resume_file: z.string().nullable(),
    name: z.string(),
    education_record: z.string().nullable(),
    job_experience: z.string().nullable(),
    resume: z.string().nullable(),
    about_me: z.string().nullable(),
});

export const coachApiUrl = {
    register: {
        url: "/coach/register",
        type: z.object({
            name: z.string().min(5, "Name is required"),
            phone_number: z
                .string()
                .regex(
                    /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
                    "Phone Number is invalid"
                ),
            about_me: z.string().min(24, "Message is required"),
            resume_file: z.any().optional(),
        }),
    },
    getPage: {
        url: "/admin/coach",
        method: "GET",
        item: getPageItem,
        response: generalResponseZod.extend({
            data: paginationReponseZod.extend({
                data: z.array(getPageItem),
            }),
        }),
    },
    adminGet: {
        url: "/admin/coach/",
        method: "GET",
        response: generalResponseZod.extend({
            data: z.object({
                id: z.number(),
                user_id: z.number(),
                phone_number: z.string(),
                status: z.number(),
                resume_file: z.string().nullable(),
                name: z.string(),
                education_record: z.string().nullable(),
                job_experience: z.string().nullable(),
                resume: z.string().nullable(),
                about_me: z.string().nullable(),
                prices: z
                    .array(
                        z.object({
                            collection_id: z
                                .string({
                                    required_error: "please choose collection.",
                                    invalid_type_error:
                                        "please choose collection.",
                                })
                                .refine(
                                    (arg) =>
                                        arg !== "please choose collection.",
                                    "please choose collection."
                                ),
                            price: z.number().or(z.string()),
                        })
                    )
            }),
        }),
    },
    adminUpdateStatus: {
        url: "/admin/coach/change-status/",
        method: "POST",
        type: z.object({
            status: z.number(),
        }),
    },
    adminUpdate: {
        url: "/admin/coach/",
        method: "POST",
        type: {
            request: z.object({
                profile_image: z.number(),
                name: z.string().max(125),
                phone_number: z
                    .string()
                    .regex(
                        /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/i,
                        "pleas inter valid number"
                    ),
                about_me: z.string().min(24),
                prices: z
                    .array(
                        z.object({
                            collection_id: z
                                .string({
                                    required_error: "please choose collection.",
                                    invalid_type_error:
                                        "please choose collection.",
                                })
                                .refine(
                                    (arg) =>
                                        arg !== "please choose collection.",
                                    "please choose collection."
                                ),
                            price: z.number().or(z.string()),
                        })
                    )
                    .min(1),
                resume: z.string().min(24).optional(),
                job_experience: z.string().min(24).optional(),
                education_record: z.string().min(24).optional(),
            }),
        },
    },
};
