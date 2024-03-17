"use client";

import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { GeneralResponseType, generalResponseZod } from "../@types/general";
import { z } from "zod";
import {
    getResponseError,
    getResponseStatus,
    getResponseSuccess,
} from "@utils/getResponse";

const toastConf = { id: "global-toast" };

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onSuccess: (data: unknown) => {
            const result = data as GeneralResponseType;

            if (!result?.success) {
                toast.error(result?.message);
            }

            if (result.notify && result.success) {
                toast.success(result.message);
            }
        },
    }),
    mutationCache: new MutationCache({
        onMutate: () => toast.loading("loading...", { ...toastConf }),
        onSuccess: async (data) => {
            const result: z.infer<typeof generalResponseZod> = data as any;

            const status = getResponseStatus(result);

            console.log(result);

            if (status && result?.notify) {
                toast.success(getResponseSuccess(result), { ...toastConf });
            }

            if (!status) {
                toast.error(getResponseError(result), { ...toastConf });
            }

            if (status && !result?.notify) {
                toast.dismiss(toastConf.id);
            }

            // if (result.status === 401) {
            //     redirectToSso.execute(result)
            // }
        },
        onError: (error) => {
            console.log(error);

            toast.error(error?.message + "test" || "somethings wrong !", {
                ...toastConf,
            });
        },
    }),
});

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <TanstackQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </TanstackQueryClientProvider>
    );
};

export default QueryClientProvider;
