import {baseAxios} from "@/lib/baseAxios";

export const getAllCoaches = async () => {

    try {

        const res = await baseAxios.get(`/v1/coach`)


        return res.data

    } catch {
        return []
    }

}