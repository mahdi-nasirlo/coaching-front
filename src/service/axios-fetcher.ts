import { AxiosHeaders, AxiosInstance } from "axios";
import toast, { DefaultToastOptions } from "react-hot-toast";
import getUrlWithParams from "./get-url-with-params";
import baseAxois from "./base-axois";

export type axiosFetcherType = {
    url: string;
    axiosInstants?: AxiosInstance;
    params?: Record<string, string | number>;
    data?: any;
    headers?: AxiosHeaders;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    cache?: RequestCache;
    tokenFromServerSide?: string;
    notifyConf?: DefaultToastOptions & {
        msg?: { onSuccess?: string; onError?: string };
    };
    notify?: boolean;
};

async function axiosFetcher(props: axiosFetcherType) {
    const {
        axiosInstants,
        url,
        params,
        data,
        headers,
        method,
        notify,
        notifyConf,
    } = props;

    const finalUrl = getUrlWithParams(url, params);

    const res = (baseAxois || axiosInstants).request({
        url: finalUrl,
        method: method || "Get",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
        },
        data,
    });

    if (notify) {
        await toast.promise(
            res,
            {
                loading: "در حال پردازش ....",
                error: notifyConf?.msg?.onError || "خطایی رخ داده است",
                success: notifyConf?.msg?.onSuccess || "با موفقیت انجام شد",
            },
            { position: "top-center", ...notifyConf }
        );
    }

    const result = await res;

    return result;
}

export default axiosFetcher;
