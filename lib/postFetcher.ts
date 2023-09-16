import {AxiosResponse} from "axios";
import {baseAxios} from "@/lib/baseAxios";


export async function postFetcher(url: string, {arg}: { arg: any } = {arg: undefined}) {

    try {

        const res: AxiosResponse = await baseAxios.post(url, arg)

        return res.data

    } catch (error) {

        console.error("Error:", error);

        return []
    }

}