import { coachApiUrl } from "@/constants/coach";
import customFetcher from "service/custome-fetcher";
import { z } from "zod";

const { adminGet } = coachApiUrl;

const getAdminCoach = (
    id: string
): Promise<z.infer<typeof adminGet.response> | undefined> =>
    customFetcher({
        url: adminGet.url + id,
        method: adminGet.method,
    });

export { getAdminCoach };
