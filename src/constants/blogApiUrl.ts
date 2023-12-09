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
        }
    }
}