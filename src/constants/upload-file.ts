import * as process from "process";

const baseUrl = process.env.NEXT_PUBLIC_BACK_END_URL

export const uploadFileApiUrl = {
    upload: baseUrl + "/admin/file-management/upload"
}