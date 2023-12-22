import {useGetPageBlogPostAdmin} from "../../../hooks/api/posts";
import React from 'react';
import {Separator} from "@ui/v2/separator";
import {DataTable} from "@ui/v2/data-table";
import {columns} from "@containers/Account/blog-post/columns";
import CreateForm from "@containers/Account/blog-post/create-form";
import {PaginationState} from "@tanstack/react-table";
import {CardTitle} from "@ui/v2/card";

""

const Index = () => {

    const [{pageIndex, pageSize}, setPagination] =
        React.useState<PaginationState>({
            pageIndex: 0,
            pageSize: 10,
        })

    const getPosts = useGetPageBlogPostAdmin({
        paginationState: {
            pageIndex,
            pageSize
        }
    })

    return (
        <div>
            <div className="tw-mb-8">
                <CreateForm/>
            </div>

            <CardTitle>
                Blog Post List
            </CardTitle>
            <Separator className="tw-mb-6"/>
            <DataTable
                loading={getPosts.isLoading || getPosts.isRefetching}
                columns={columns}
                data={getPosts.data?.data || []}
                pagination={{
                    totalSize: getPosts.data?.meta?.total || 0,
                    pageCount: getPosts.data?.meta?.last_page,
                    manualPagination: true,
                    state: {pageIndex, pageSize},
                    setPagination: setPagination
                }}
            />
        </div>
    );
};

export default Index;