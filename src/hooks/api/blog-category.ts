import {useQuery} from "@tanstack/react-query";
import {blogCategoryApiUrl} from "@/constants/blog-category";
import customeFetcher from "../../service/customeFetcher";

const apiData = blogCategoryApiUrl

export const useGetAllBlogCategory = () => useQuery({
    queryKey: [apiData.getAll.url],
    queryFn: () => customeFetcher({
        url: apiData.getAll.url,
        method: apiData.getAll.method,
    })
})