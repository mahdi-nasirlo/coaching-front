import {useEffect, useState} from "react";
import type {GetServerSideProps, NextPage} from "next";
import {useRouter} from "next/router";
import SEO from "@components/seo/page-seo";
import Spinner from "@ui/spinner";
import Layout01 from "@layout/layout-01";
import Breadcrumb from "@components/breadcrumb";
import {IBlog} from "@utils/types";
import {getPageBlogPosts} from "@/lib/api/blog";
import {blogApiUrl} from "@/constants/blogApiUrl";
import BlogArea from "@containers/blog-full/layout-05";

type TProps = {
    data: {
        blogs: IBlog[];
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const apiData = blogApiUrl.post.getPage

const BlogSearch: PageProps = ({data: {blogs}}) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { s } = router.query;


    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center">
                <Spinner />
            </div>
        );
    }
    const title = s ? `Search results for: ${s as string}` : "Search";
    return (
        <>
            <SEO title={title} />
            <Breadcrumb
                pages={[{path: "/", label: "home"}, {label: apiData.pageName, path: apiData.pageUrl}]}
                currentPage={title}
            />
            <BlogArea
                data={{
                    blogs,
                }}
            />
        </>
    );
};

BlogSearch.Layout = Layout01;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const page = (context.query?.page || "1") as string
    const search = context.query?.s as string || undefined

    const blogs = await getPageBlogPosts(page, apiData.POSTS_PER_PAGE, search)

    return {
        props: {
            data: {
                blogs: blogs?.data || [],
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default BlogSearch;
