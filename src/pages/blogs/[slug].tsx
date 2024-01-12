import type {GetServerSidePropsContext, NextPage} from "next";
import Layout01 from "@layout/layout-01";
import {BlogMetaType, IBlog, IInstructor} from "@utils/types";
import SEO from "@components/seo/page-seo";
import Breadcrumb from "@components/breadcrumb";
import BlogDetailsArea from "@containers/blog-details";
import BlogAuthor from "@containers/blog-details/blog-author";
import BlogNavLinks from "@containers/blog-details/nav-links";
import DisqusComment from "@components/disqus-comment";
import BlogSidebar from "@containers/blog-details/blog-sidebar";
import {toCapitalize} from "@utils/methods";
import {getAllBlogs, getPrevNextPost, getTags} from "@/lib/blog";
import {getBlogPost} from "@/lib/api/blog";


type TProps = {
    data: {
        blog: IBlog;
        author: IInstructor;
        prevAndNextPost: {
            prevPost: IBlog;
            nextPost: IBlog;
        };
        recentPosts: IBlog[];
        tags: BlogMetaType[];
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const BlogDetails: PageProps = ({
                                    data: {blog, prevAndNextPost, recentPosts, tags},
                                }) => {

    console.log(blog)
    return (
        <>
            <SEO
                title={toCapitalize(blog?.title)}
                description="This is a mighty good description of this blog."
                jsonLdType="article"
                article={{
                    publishedTime: blog?.postedAt,
                    modifiedTime: blog?.postedAt,
                    authors: [blog?.author?.name],
                    tags: tags.map((tag) => tag.title),
                }}
                image={`https://maxcoach-react.pages.dev${blog?.image?.src}`}
            />
            <Breadcrumb
                pages={[
                    {path: "/", label: "home"},
                    {
                        path: "/blogs/blog-grid-sidebar",
                        label: "blogs",
                    },
                ]}
                currentPage={blog?.title}
                showTitle={false}
            />
            <div
                className="tw-container tw-pb-15 md:tw-pb-20 lg:tw-pb-[100px] tw-grid tw-grid-cols-3 tw-gap-7.5 lg:tw-gap-15">
                <div className="tw-col-span-full lg:tw-col-[1/3]">
                    <BlogDetailsArea {...blog} />
                    <BlogAuthor {...blog.author} />
                    <BlogNavLinks {...prevAndNextPost} />
                    <DisqusComment id={blog.slug} title={blog.title}/>
                </div>
                <div className="tw-col-span-full lg:tw-col-[3/-1]">
                    <BlogSidebar recentPosts={recentPosts} tags={tags}/>
                </div>
            </div>
        </>
    );
};

BlogDetails.Layout = Layout01;

type Params = {
    params: {
        slug: string;
    };
};

export const getServerSideProps = async ({params}: Params, context: GetServerSidePropsContext) => {

    const blog = await getBlogPost(params.slug, context)  // const blog = getPostBySlug(params.slug, "all");

    console.log(blog)
    if (blog?.status === 404) {
        return {
            notFound: true,
        }
    }

    const prevAndNextPost = getPrevNextPost(params.slug, [
        "title",
        "image",
        "slug",
    ]);
    const {blogs: recentPosts} = getAllBlogs(["title"], 0, 5);
    const tags = getTags();

    return {
        props: {
            data: {
                blog: blog?.data,
                prevAndNextPost,
                recentPosts,
                tags,
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default BlogDetails;
