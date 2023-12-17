"use client";

import React from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {MutationCache, QueryClient, QueryClientProvider as TanstackQueryClientProvider} from "@tanstack/react-query";
import toast from "react-hot-toast";

const toastConf = {id: "global-toast"}

const queryClient = new QueryClient({
    mutationCache: new MutationCache({
        onMutate: () => toast.loading("loading...", {...toastConf}),
        onSuccess: (data: unknown) => {
            // @ts-ignore
            if (data?.ok) {
                // @ts-ignore
                toast.success(data?.message || "successfully operation", {...toastConf})
            }
            // @ts-ignore
            toast.error(data?.message || data?.error || "unsuccessfully operation", {...toastConf})
        },
        onError: error => toast.error(error?.message + "test" || "somethings wrong !", {...toastConf})
    })
});

const QueryClientProvider = ({children}: { children: React.ReactNode }) => {

    return (
        <TanstackQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </TanstackQueryClientProvider>
    );
};

export default QueryClientProvider;
