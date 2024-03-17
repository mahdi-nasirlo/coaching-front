import { authApiUrl } from "@/constants/auth";
import { GeneralResponseType } from "@/type/general";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import customFetcher from "service/custome-fetcher";
import { z } from "zod";

const apiData = authApiUrl;

const useLogin = () =>
    useMutation({
        mutationFn: (variables: { email: string; password: string }) => {
            return signIn("credentials", {
                email: variables.email,
                password: variables.password,
                redirect: false,
            });
        },
    });

const useRegister = () =>
    useMutation({
        mutationFn: async (
            variables: z.infer<typeof apiData.register.schema>
        ) => {
            const register: GeneralResponseType = await customFetcher({
                url: apiData.register.url,
                method: "POST",
                data: variables,
            });

            if (register.success) {
                return signIn("credentials", {
                    email: variables.email,
                    password: variables.password,
                    redirect: false,
                });
            }

            return register;
        },
    });

export { useLogin, useRegister };
