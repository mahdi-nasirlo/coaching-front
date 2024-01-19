import {z} from "zod";

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
};
