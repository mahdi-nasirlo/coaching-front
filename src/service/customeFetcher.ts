import getUrlWithParams from "./getUrlWithParams";
import baseAxois from "./base-axois";
import {AxiosHeaders, AxiosInstance} from "axios";
import {GeneralResponseType} from "../@types/general";
import handleError from "./handleError";
import {getSessionToken} from "@utils/methods";
import {GetServerSidePropsContext} from "next";

type Props = {
    url: string,
    axiosInstance?: AxiosInstance;
    params?: Record<string, string | number>;
    data?: any;
    headers?: AxiosHeaders;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | string;
    cache?: RequestCache;
    token?: string,
    notify?: boolean,
    context?: GetServerSidePropsContext
}

async function customFetcher(props: Props): Promise<GeneralResponseType | any | undefined> {

    const {
        url,
        axiosInstance,
        params,
        data,
        headers,
        method,
        context,
        notify
    } = props

    const token = await getSessionToken(context);

    const BaseAxios = axiosInstance || baseAxois

    const finalUrl = getUrlWithParams(BaseAxios.getUri() + url, params)

    let logEntry = {
        timestamp: new Date().toISOString(),
        method: method || 'GET',
        path: finalUrl,
        status: "0",
        token: token,
        message: '',
        data: null as any,
    };

    try {
        const response = await BaseAxios.request({
            url: finalUrl,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                ...headers
            },
            method: method || "GET",
            data: data,
        })

        const responseBody = await response.data;

        const isOk = response.status >= 200 && response.status < 300;
        
        logEntry.status = `${response.status}`;
        logEntry.message = `${isOk}`;

        console.log(logEntry);

        return {
            ok: isOk,
            status: response.status,
            success: responseBody?.success,
            notify: notify,
            message: responseBody?.message,
            data: responseBody?.data
        }

    } catch (error: any) {

        logEntry.message = error.message;
        logEntry.status = `${error?.response?.status}`;
        logEntry.data = JSON.stringify(error?.response?.data)

        console.error('Request Network/Error:', logEntry);

         return {
            notify: notify || true,
            message: error?.response?.data?.message || error.message,
            status: error?.response?.status || error.status,
            ok: false,
            ...error?.response?.data
        }

    }

}

export default customFetcher