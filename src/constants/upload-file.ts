import { generalResponseZod } from "@/type/general";
import * as process from "process";
import { z } from "zod";

const baseUrl = process.env.NEXT_PUBLIC_BACK_END_URL;

export const uploadFileApiUrl = {
    baseUrl,
    load: "/api/admin/file-management/",
    process: {
        url: baseUrl + "/api/admin/file-management",
        method: "POST",
        response: generalResponseZod.extend({
            data: z.object({
                key: z.string(),
            }),
        }),
    },
};
