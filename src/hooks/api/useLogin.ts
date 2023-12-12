import {useMutation} from "@tanstack/react-query";
import {signIn} from "next-auth/react";
import toast from "react-hot-toast";


export const useLogin = () => useMutation({
    mutationFn: (variables: { email: string, password: string }) => {
        return signIn(
            "credentials",
            {email: variables.email, password: variables.password, redirect: false}
        )
    },
    onMutate: () => toast.loading("loading ....", {id: "auth-login"}),
    onSuccess: (data) => {
        if (data?.ok) toast.success("successfully login", {id: "auth-login"})
        if (data?.ok === false) toast.error(data?.error || "unsuccessfully login", {id: "auth-login"})
    }
})


