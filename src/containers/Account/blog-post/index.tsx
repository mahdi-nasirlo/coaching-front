import {useGetPageBlogPostAdmin} from "../../../hooks/api/posts";
import React from 'react';
import {Separator} from "@ui/v2/separator";
import {DataTable} from "@ui/v2/data-table";
import {columns} from "@containers/Account/blog-post/columns";
import CreateForm from "@containers/Account/blog-post/create-form";

""

const Index = () => {

    const getPosts = useGetPageBlogPostAdmin()

    return (
        <div>
            <div className="tw-mb-8">
                <h1 className="tw-text-lg sm:tw-text-sm lg:tw-text-xl tw-leading-[1.17] tw-text-secondary">
                    Create Post
                </h1>
                <Separator className="tw-mb-6"/>
                <CreateForm/>
            </div>

            <h1 className="tw-text-lg sm:tw-text-sm lg:tw-text-xl tw-leading-[1.17] tw-text-secondary">
                Blog Post List
            </h1>
            <Separator className="tw-mb-6"/>
            <DataTable columns={columns} data={getPosts.data?.data || []}/>
        </div>
    );
};

export default Index;