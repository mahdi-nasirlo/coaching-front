import {baseAxios} from "@/lib/baseAxios";

export const getAllCoaches = async () => {

    try {

        const res = await baseAxios.get(`/v1/coach`)


        return res.data

    } catch {

        console.log("error: coach get by id")

        return []

    }

}