import * as process from "process";

const baseUrl = process.env.NEXT_PUBLIC_BACK_END_URL;

export const uploadFileApiUrl = {
    fetch: {
        url: baseUrl + "/api/v1/admin/public"
    },
    upload: {
        url: baseUrl + "/api/v1/admin/file-management",
    },
};
