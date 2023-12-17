import {useMutation} from "@tanstack/react-query";
import {signIn} from "next-auth/react";


export const useLogin = () => useMutation({
    mutationFn: (variables: { email: string, password: string }) => {
        return signIn(
            "credentials",
            {email: variables.email, password: variables.password, redirect: false}
        )
    },
})


