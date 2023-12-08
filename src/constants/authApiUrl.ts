import {z} from "zod";

export const authApiUrl = {
    login: {
        url: "/auth/login",
        schema: z.object({
            email: z.string().email(),
            password: z.string().min(8),
        }),
        method: "POST"
    }
}