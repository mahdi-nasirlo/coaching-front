import {z} from "zod";

export const authApiUrl = {
    login: {
        url: "/auth/login",
        schema: z.object({
            email: z.string().email(),
            password: z.string().min(8),
        }),
        method: "POST"
    },
    register: {
        url: "/auth/register",
        schema: z.object({
            name: z.string().min(1, "name is required"),
            email: z.string().min(1, "email is required").email("email is not valid"),
            password: z.string().min(8, "password is must 8 characters"),
            password_confirmation: z.string().min(8)
        }).refine((data) => data.password === data.password_confirmation, {
            message: "passwords don't match",
            path: ["password"]
        })
    }
}