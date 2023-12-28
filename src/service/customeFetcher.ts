import getUrlWithParams from "./getUrlWithParams";
import baseAxois from "./base-axois";
import {AxiosHeaders, AxiosInstance} from "axios";
import {GeneralErrorType} from "../@types/api-response/general";
import handleError from "./handleError";

type Props = {
    url: string,
    axiosInstance?: AxiosInstance;
    params?: Record<string, string | number>;
    data?: any;
    headers?: AxiosHeaders;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | string;
    cache?: RequestCache;
    tokenFromServerSide?: string,
    token?: string
}

async function customFetch(props: Props): Promise<GeneralErrorType | any | undefined> {

    const {
        url,
        axiosInstance,
        params,
        data,
        headers,
        method,
    } = props

    const BaseAxios = axiosInstance || baseAxois

    const finalUrl = getUrlWithParams(BaseAxios.getUri() + url, params)

    let logEntry = {
        timestamp: new Date().toISOString(),
        method: method || 'GET',
        path: finalUrl,
        status: "0",
        message: '',
        data: null as any,
    };

    try {
        const response = await BaseAxios.request({
            url: finalUrl,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${"2|VmNco5FXdRXwyVawZIHBtwyR7WPjTVxoWg8DKxmzf9fc82e2"}`,
                ...headers
            },
            method: method || "GET",
            data: data,
        })

        const responseBody = await response.data;

        const isOk = response.status >= 200 && response.status < 300;

        if (isOk) {
            logEntry.message = 'Request successful';
            return responseBody;
        } else {

            logEntry.message = `Request failed with status: ${response.status}`;
            logEntry.status = `${response.status}`;

            if (response.status == 401) await handleError()

            console.error('Request Error:', logEntry);

            return {ok: isOk, status: response.status, message: responseBody?.message, data: responseBody}
        }
    } catch (error: any) {

        logEntry.message = error.message;
        logEntry.status = `${error?.response?.status}`;

        logEntry.data = JSON.stringify(error?.response?.data)

        if (error?.response?.status == 401) await handleError()

        console.error('Request Network/Error:', logEntry);

        return {
            message: error?.response?.data?.message || error.message,
            status: error?.response?.status || error.status,
            ok: false,
            data: error?.response?.data
        }

    }

}

export default customFetch