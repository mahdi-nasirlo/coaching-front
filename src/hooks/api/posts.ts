import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {blogApiUrl} from "../../constants/blogApiUrl";
import customeFetcher from "../../service/customeFetcher";
import {PaginationState} from "@tanstack/react-table";
import {z} from "zod";
import Router, {useRouter} from "next/router";


const apiData = blogApiUrl.post

export const useGetPageBlogPostAdmin = ({paginationState}: { paginationState: PaginationState }) => useQuery({
    queryKey: [apiData.admin.getPage.url, paginationState],
    queryFn: () => customeFetcher({
        url: apiData.admin.getPage.url,
        method: "GET",
        params: {
            page: paginationState.pageIndex,
        }
    })
})

export const useCreateBlogPost = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (variables: z.infer<typeof apiData.admin.create.type>) => customeFetcher({
            method: "POST",
            url: apiData.admin.create.url,
            data: variables,
        }),
        onSuccess: async (data) => {
            if (data?.success) {
                await Router.push(apiData.admin.getPage.pageUrl)
                await queryClient.invalidateQueries({queryKey: [apiData.admin.getPage.url]})
            }
        }
    })
}

export const useUpdateBlogPost = (slug: string) => {

    const router = useRouter()

    return useMutation({
        mutationFn: (variables: z.infer<typeof apiData.admin.create.type>) => customeFetcher({
            method: "POST",
            url: apiData.admin.update.url + slug,
            data: variables,
        }),
        onSuccess: async () => {
            await router.push(apiData.admin.getPage.pageUrl)
        }
    })
}

export const useDeleteBlogPost = (slug: string) => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (variables: z.infer<typeof apiData.admin.delete.type>) => customeFetcher({
            method: apiData.admin.delete.method,
            url: apiData.admin.delete.url + slug,
            data: variables,
        }),
        onSuccess: () => {
            // if (data?.status === 200)
            queryClient.invalidateQueries({queryKey: [apiData.admin.getPage.url]})
        }
    })
}