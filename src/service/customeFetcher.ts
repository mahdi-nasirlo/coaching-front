import getUrlWithParams from "./getUrlWithParams";
import baseAxois from "./base-axois";
import {AxiosInstance} from "axios";


type Props = {
    url: string,
    axiosInstance?: AxiosInstance;
    params?: Record<string, string | number>;
    data?: any;
    headers?: HeadersInit;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    cache?: RequestCache;
    tokenFromServerSide?: string,
    token?: string
}

async function customFetch(props: Props) {

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
        path: getUrlWithParams(BaseAxios.getUri(), params),
        status: 500,
        message: ''
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
            ...data
        })

        logEntry.status = response.status;

        const responseBody = await response.data;

        if (response.status === 200) {
            logEntry.message = 'Request successful';
            return responseBody;
        } else {
            logEntry.message = `Request failed with status: ${response.status}`;
            console.error('Request Error:', logEntry);
            // await Promise.reject(new Error(`Request failed with status: ${response.status}`));
            return {status: response.status, message: responseBody?.message, data: responseBody}
        }
    } catch (error: any) {
        logEntry.message = error.message;
        console.error('Request Network/Error:', logEntry);
        // return Promise.reject(error);
        return undefined
    } finally {
        console.log('Request Log:', logEntry);
    }


}

export default customFetch