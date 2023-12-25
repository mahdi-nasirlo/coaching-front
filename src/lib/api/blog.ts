import {blogApiUrl} from "../../constants/blogApiUrl";
import {General, GeneralErrorType} from "../../@types/api-response/general";
import customFetcher from "../../service/customeFetcher";

const blogApiData = blogApiUrl.post

export const getPageBlogPosts = async (): Promise<General<typeof blogApiData.getPage.type | undefined>> =>
    await customFetcher({
        url: blogApiData.getPage.url
    });

export const getAdminBlogPost = (slug: string): Promise<GeneralErrorType | undefined> => customFetcher({
    url: blogApiData.admin.get.url + slug,
    method: blogApiData.admin.get.method,
})