import {baseAxios} from "@/lib/baseAxios";
import {AxiosResponse} from "axios";

export const  loginRequest = async (values: loginInterface):Promise<AxiosResponse> => {

    return  await baseAxios.post(`/auth/login`, values)

}

export interface loginInterface {
    email: string,
    password: string
}