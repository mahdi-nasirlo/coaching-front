import getUrlWithParams from "./getUrlWithParams";
import baseAxois from "./base-axois";
import {AxiosHeaders, AxiosInstance} from "axios";
import {GeneralErrorType} from "../@types/api-response/general";


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
    // const token = tokenFromServerSide ?  tokenFromServerSide  : getToken()

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
                Authorization: `Bearer ${"token"}`,
                ...headers
            },
            method: method || "GET",
            data: data,
        })

        const responseBody = await response.data;

        if (response.status === 200) {
            logEntry.message = 'Request successful';
            return responseBody;
        } else {

            logEntry.message = `Request failed with status: ${response.status}`;
            logEntry.status = `${response.status}`;

            console.error('Request Error:', logEntry);

            return {status: response.status, message: responseBody?.message, data: responseBody}
        }
    } catch (error: any) {

        logEntry.message = error.message;
        logEntry.status = `${error?.response?.status}`;

        logEntry.data = JSON.stringify(error?.response?.data)

        console.error('Request Network/Error:', logEntry);

        throw new Error("test")
        // throw new Error("request field")

    }

}

export default customFetch