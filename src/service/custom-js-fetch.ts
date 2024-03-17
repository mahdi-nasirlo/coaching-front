import { GeneralResponseType } from "../@types/general";
import getUrlWithParams from "./get-url-with-params";

type Props = {
    url: string;
    baseUrl?: string;
    params?: Record<string, string | number>;
    data?: any;
    headers?: HeadersInit;
    method?: "GET" | "POST" | "PUT" | "DELETE" | string;
    cache?: RequestCache;
    tokenFromServerSide?: string;
};

async function customJsFetch({
    url,
    baseUrl = process.env.NEXT_PUBLIC_BACK_END_URL,
    params,
    data,
    headers = {},
    method,
    cache = "no-store",
}: Props): Promise<GeneralResponseType | any | undefined> {
    const finalUrl = getUrlWithParams(url, params);

    const res = await fetch(baseUrl + "/api" + finalUrl, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // ...token && {Authorization: `Bearer ${token}`},
            ...headers,
        },
        method: method || "GET",
        cache: cache || "no-store",
        ...(data && { body: JSON.stringify(data) }),
    });

    const convertedToJson: any = await res.json();

    console.log({
        status: res.status,
        url: baseUrl + finalUrl,
        data: convertedToJson,
        ok: res.ok,
        success: convertedToJson?.success,
        message: convertedToJson?.message,
    });

    return convertedToJson;
}

export default customJsFetch;
