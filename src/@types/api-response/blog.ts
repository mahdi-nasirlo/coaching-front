import customeFetcher from "../../service/customeFetcher";
import {General} from "./general";
import {blogApiUrl} from "../../constants/blogApiUrl";


const blogApiData = blogApiUrl.post

export const getPageBlogPosts = async (): Promise<General<typeof blogApiData.getPage.type | undefined>> => await customeFetcher({url: blogApiData.getPage.url});
