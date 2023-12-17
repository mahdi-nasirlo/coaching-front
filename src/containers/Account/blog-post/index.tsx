import {useGetPageBlogPostAdmin} from "../../../hooks/api/posts";
import React from 'react';
import {Separator} from "@ui/v2/separator";
import {DataTable} from "@ui/v2/data-table";
import {columns} from "@containers/Account/blog-post/columns";
import CreateForm from "@containers/Account/blog-post/create-form";
import {PaginationState} from "@tanstack/react-table";

""

const Index = () => {

    const [{pageIndex, pageSize}, setPagination] =
        React.useState<PaginationState>({
            pageIndex: 0,
            pageSize: 10,
        })

    const fetchDataOptions = {
        pageIndex,
        pageSize,
    }

    const getPosts = useGetPageBlogPostAdmin({paginationState: fetchDataOptions})

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
            <DataTable
                columns={columns}
                data={getPosts.data?.data || []}
                pagination={{
                    pageCount: getPosts.data?.meta?.last_page,
                    manualPagination: true,
                    state: fetchDataOptions,
                    setPagination: setPagination
                }}
            />
        </div>
    );
};

export default Index;