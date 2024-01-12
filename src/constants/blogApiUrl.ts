import {any, number, string, z} from "zod";

export const blogApiUrl = {
    category: {
        admin: {
            getAll: {
                url: "/admin/blog/category/getAll"
            }
        }
    },
    post: {
        get: {
            url: "/blog/post/get/",
            method: "GET",
        },
        getPage: {
            POSTS_PER_PAGE: 4,
            pageUrl: "/blogs/blog-classic",
            pageName: "Blog Posts",
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
                pageUrl: "/account/blog/post",
                pageName: "blog post",
                url: "/admin/blog/post/getPage",
                type: z.object({
                    "title": z.string(),
                    "path": z.string(),
                    "view": z.number(),
                    "postedAt": z.string(),
                })
            },
            create: {
                pageUrl: "/account/blog/post/create",
                pageName: "create",
                url: "/admin/blog/post/create",
                type: z.object({
                    title: z.string().min(3),
                    slug: z.string().min(4),
                    content: z.string().optional(),
                    image: z.any(),
                    seo_title: z.string().optional(),
                    seo_description: z.string().optional(),
                    blog_category_id: z.string().optional(),
                    author_id: z.number().optional()
                })
            },
            get: {
                url: "/admin/blog/post/get/",
                method: "GET",
            },
            update: {
                page: "/account/blog/post/edit/",
                url: "/admin/blog/post/update/"
            },
            delete: {
                url: "/admin/blog/post/delete/",
                type: z.object({
                    uid: z.string()
                }),
                method: "POST"
            }
        }
    }
}