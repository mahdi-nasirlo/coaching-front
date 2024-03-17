import { useQuery } from "@tanstack/react-query";
import { blogCategoryApiUrl } from "@/constants/blog-category";
import customeFetcher from "../../service/custome-fetcher";

const apiData = blogCategoryApiUrl;

export type GetAllCategoryType = {
    id: number;
    name: string;
    slug: string;
};
export const useGetAllBlogCategory = () =>
    useQuery<GetAllCategoryType[]>({
        queryKey: [apiData.getAll.url],
        queryFn: () =>
            customeFetcher({
                url: apiData.getAll.url,
                method: apiData.getAll.method,
            }),
    });
