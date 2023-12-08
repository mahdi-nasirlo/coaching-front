import customeFetcher from "../../service/customeFetcher";
import {authApiUrl} from "../../constants/authApiUrl";
import {z} from "zod";

const apiData = authApiUrl.login
export const getTokenWithEmail = async (props: { data: z.infer<typeof apiData.schema> }) => {

    const res = await customeFetcher({url: {path: apiData.url}, method: apiData.method, data: props.data})

    console.log(res)

    return false
};
