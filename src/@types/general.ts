import { z } from "zod";

export interface General<T> {
    data: T;
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: number | null;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        path: string;
        per_page: number;
        to: number | null;
        total: number;
    };
}

export interface GeneralResponseType {
    ok?: string;
    message: string;
    status: number;
    success?: string;
    notify?: boolean;
    data?: any;
}

const generalResponseZod = z.object({
    ok: z.boolean(),
    status: z.number(),
    notify: z.boolean().or(z.undefined()),
    success: z.boolean(),
    message: z.string(),
});

export { generalResponseZod };
