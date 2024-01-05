import type {GetServerSideProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import Breadcrumb from "@components/breadcrumb";
import BlogArea from "@containers/blog-full/layout-03";
import {BlogMetaType, IBlog} from "@utils/types";
import {getAllBlogs, getTags} from "../../../../lib/blog";
import {getPageBlogPosts} from "@/lib/api/blog";
import {blogApiUrl} from "@/constants/blogApiUrl";

type TProps = {
    data: {
        blogs: IBlog[];
        recentPosts: IBlog[];
        tags: BlogMetaType[];
        currentPage: number;
        numberOfPages: number;
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const apiData = blogApiUrl.post.getPage

const BlogClassic: PageProps = ({
                                    data: {blogs, recentPosts, tags, currentPage, numberOfPages},
                                }) => {
    return (
        <>
            <SEO title={`Blog Classic - Page - ${currentPage}`}/>
            <Breadcrumb
                pages={[{path: "/", label: "home"}, {label: apiData.pageName, path: apiData.pageUrl}]}
                currentPage={`Page ${currentPage}`}
                title={apiData.pageName}
            />
            <BlogArea
                data={{
                    blogs,
                    recentPosts,
                    tags,
                    pagiData: {
                        currentPage,
                        numberOfPages,
                        rootPage: "blogs/blog-classic",
                    },
                }}
            />
        </>
    );
};

BlogClassic.Layout = Layout01;

interface Params extends ParsedUrlQuery {
    page: string;
}

export const getServerSideProps: GetServerSideProps<TProps, Params> = async ({params}) => {
    const page = params?.page;
    const currentPage = !page || Number.isNaN(+page) ? 1 : +page;
    const blogs = await getPageBlogPosts(page, apiData.POSTS_PER_PAGE)

    const {blogs: recentPosts} = getAllBlogs(["title"], 0, 5);
    const tags = getTags();
    return {
        props: {
            data: {
                blogs: (blogs?.data || []) as IBlog[],
                recentPosts,
                tags,
                currentPage,
                numberOfPages: Math.floor((blogs?.meta.total || 0) / apiData.POSTS_PER_PAGE)
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default BlogClassic;
