import {General, GeneralErrorType} from "../../@types/api-response/general";
import customFetcher from "../../service/customeFetcher";
import {GetServerSidePropsContext} from "next";
import {blogApiUrl} from "@/constants/blogApiUrl";

const blogApiData = blogApiUrl.post

export const getPageBlogPosts = async (page: number | string = 1, perPage: number | string = 3, search?: string): Promise<General<typeof blogApiData.getPage.type | undefined>> => {

    const params: { page: number | string; perPage: number | string; search?: string } = {
        page,
        perPage,
    }

    if (search) params.search = search

    return await customFetcher({
        url: blogApiData.getPage.url,
        params
    })
};

export const getBlogPost = (slug: string, context: GetServerSidePropsContext): Promise<GeneralErrorType | undefined> => customFetcher({
    url: blogApiData.get.url + slug,
    method: blogApiData.get.method,
    context
})

export const getAdminBlogPost = (slug: string, context: GetServerSidePropsContext): Promise<GeneralErrorType | undefined> => customFetcher({
    url: blogApiData.admin.get.url + slug,
    method: blogApiData.admin.get.method,
    context
})