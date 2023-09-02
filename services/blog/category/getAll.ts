import {baseAxios} from "@/lib/baseAxios";

export const getAllBlogCategory = async () => {

    try {

        const res = await baseAxios.get(`/v1/blog/category/getAll`)

        return res.data

    } catch {
        return null
    }

}

