import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import simpleFetcher from "../../service/simpleFetcher";
import {blogApiUrl} from "../../constants/blogApiUrl";
import customeFetcher from "../../service/customeFetcher";
import {PaginationState} from "@tanstack/react-table";
import {z} from "zod";


const apiData = blogApiUrl.post

export const useRequestPost = () => {
    return useQuery({queryKey: ["/blog/posts"], queryFn: simpleFetcher});
};

export const useGetPageBlogPostAdmin = ({paginationState}: { paginationState: PaginationState }) => useQuery({
    queryKey: [apiData.getPage.url, paginationState],
    queryFn: () => customeFetcher({
        url: apiData.getPage.url,
        method: "GET",
        params: {
            page: paginationState.pageIndex,
        }
    })
})

export const useCreateBlogPost = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: variables => customeFetcher({
            method: "POST",
            url: apiData.admin.create.url,
            data: variables,
        }),
        onSuccess: () => {
            // if (data?.status === 200)
            queryClient.invalidateQueries({queryKey: [apiData.getPage.url]})
        }
    })
}

export const useDeleteBlogPost = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (variables: z.infer<typeof apiData.admin.delete.type>) => customeFetcher({
            method: apiData.admin.delete.method,
            url: apiData.admin.delete.url,
            data: variables,
        }),
        onSuccess: () => {
            // if (data?.status === 200)
            queryClient.invalidateQueries({queryKey: [apiData.getPage.url]})
        }
    })
}