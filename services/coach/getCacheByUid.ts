import {baseAxios} from "@/lib/baseAxios";

export const getCacheByUid = async (uid: string) => {

    try {

        const res = await baseAxios.get(`/coach/${uid}`)

        return res.data

    } catch {

        console.log("error: coach all")

        return []
    }

}