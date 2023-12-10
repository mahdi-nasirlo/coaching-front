import {blogApiUrl} from "../../constants/blogApiUrl";
import {General} from "../../@types/api-response/general";
import customFetcher from "../../service/customeFetcher";

const blogApiData = blogApiUrl.post

export const getPageBlogPosts = async (): Promise<General<typeof blogApiData.getPage.type | undefined>> => await customFetcher({url: blogApiData.getPage.url});
