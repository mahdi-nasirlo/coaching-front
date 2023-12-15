import {useMutation, useQuery} from "@tanstack/react-query";
import simpleFetcher from "../../service/simpleFetcher";
import {blogApiUrl} from "../../constants/blogApiUrl";
import customeFetcher from "../../service/customeFetcher";
import toast from "react-hot-toast";


const apiData = blogApiUrl.post

export const useRequestPost = () => {
    return useQuery({queryKey: ["/blog/posts"], queryFn: simpleFetcher});
};

export const useGetPageBlogPostAdmin = () => useQuery({queryKey: [apiData.getPage.url], queryFn: simpleFetcher})

export const useCreateBlogPost = () => useMutation({
    mutationFn: variables => customeFetcher({
        method: "POST",
        url: apiData.admin.create.url,
        data: variables
    }),
    onMutate: () => toast.loading("loading ....", {id: "blog-post-create"}),
    onSuccess: data => {
        if (data?.ok) toast.success(data?.message, {id: "blog-post-create"})
        toast.error(data?.message, {id: "blog-post-create"})
    },
})