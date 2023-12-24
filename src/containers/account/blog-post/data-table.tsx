"use client"

import React from 'react';
import {CardTitle} from "@ui/v2/card";
import {Separator} from "@ui/v2/separator";
import {columns} from "@containers/account/blog-post/columns";
import {PaginationState} from "@tanstack/react-table";
import {useGetPageBlogPostAdmin} from "../../../hooks/api/posts";
import {DataTable as Table} from "@ui/v2/data-table";

export const DataTable = () => {

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
            <CardTitle>
                Blog Post List
            </CardTitle>
            <Separator className="tw-mb-6"/>
            <Table
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