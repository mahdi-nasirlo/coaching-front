import {AxiosResponse} from "axios";
import {baseAxios} from "@/lib/baseAxios";


export async function getFetcher(url: string, value: any) {


    try {
        let queryString = ''

        if (value?.arg) {
            const params: { key: string, value: string }[] = value.arg
            queryString = "?" + params.map(param => `${param.key}=${param.value}`).join('&');
        }

        const res: AxiosResponse = await baseAxios.get(`${url}${queryString}`)

        return res.data

    } catch (error) {

        console.error("Error:", error);

        return []
    }

}