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

export const paginationReponseZod = z.object({
    links: z.object({
        first: z.string(),
        last: z.string(),
        prev: z.string(),
        next: z.string(),
    }),
    meta: z.object({
        current_page: z.number(),
        from: z.number(),
        last_page: z.number(),
        links: z.array(
            z.object({
                url: z.string(),
                label: z.string(),
                active: z.boolean(),
            })
        ),
        path: z.string(),
        per_page: z.number(),
        to: z.number(),
        total: z.number(),
    }),
});

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
