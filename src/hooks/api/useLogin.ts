import { authApiUrl } from "@/constants/auth";
import {useMutation} from "@tanstack/react-query";
import { GeneralResponseType } from "@types/api-response/general";
import { signIn } from "next-auth/react";
import customFetcher from "service/customeFetcher";
import { z } from "zod";

const apiData = authApiUrl

const useLogin = () => useMutation({
    mutationFn: (variables: { email: string, password: string }) => {
        return signIn(
            "credentials",
            {email: variables.email, password: variables.password, redirect: false}
        )
    },
})

const useRegister = () => useMutation({
    mutationFn: async (variables: z.infer<typeof apiData.register.schema>) => {

        const register: GeneralResponseType  = await customFetcher({
            url: apiData.register.url,
            method: "POST",
            data: variables
        })
                
        if (register.success) {
            return signIn(
                "credentials",
                {email: variables.email, password: variables.password, redirect: false}
            )   
        }

        return register
    }
})

export {useLogin, useRegister}


