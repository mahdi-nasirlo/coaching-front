import {any, number, string, z} from "zod";

export const blogApiUrl = {
    post: {
        getPage: {
            url: "/blog/post/getPage",
            type: typeof {
                title: string,
                image: {src: string},
                category: {
                    title: string,
                    slug: string,
                    path: string
                },
                postedAt: string,
                views: number,
                author: {
                    id: number,
                    name: string,
                    image: [Object],
                    bio: string,
                    socials: z.array(any()),
                    slug: string,
                    path: string
                },
                excerpt: string,
                path: string
            }
        },
        admin: {
            getPage: {
                page: "/account/blog/post",
                url: "/admin/blog/post/getPage",
                type: z.object({
                    "title": z.string(),
                    "path": z.string(),
                    "view": z.number(),
                    "postedAt": z.string(),
                })
            },
            create: {
                page: "/account/blog/post",
                url: "/blog/post/create",
                type: z.object({
                    title: z.string().min(3),
                    slug: z.string().min(4),
                    content: z.string().optional(),
                    seo_title: z.string().optional(),
                    seo_description: z.string().optional(),
                    blog_category_id: z.number().optional(),
                    author_id: z.number().optional()
                })
            },
            update: {
                page: "/account/blog/post/edit/"
            },
            delete: {
                url: "/blog/post/delete",
                type: z.object({
                    uid: z.string()
                }),
                method: "POST"
            }
        }
    }
}