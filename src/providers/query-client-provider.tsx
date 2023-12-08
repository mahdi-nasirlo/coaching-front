"use client";

import React from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider as TanstackQueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({children}: { children: React.ReactNode }) => {

    return (
        <TanstackQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </TanstackQueryClientProvider>
    );
};

export default QueryClientProvider;
