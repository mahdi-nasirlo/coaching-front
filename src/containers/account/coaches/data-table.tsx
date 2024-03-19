"use client";

import React from "react";
import { columns } from "@containers/account/coaches/columns";
import { PaginationState } from "@tanstack/react-table";
import { DataTable as Table } from "@ui/v2/data-table";
import { useGetPageCoaches } from "hooks/api/coach";

export const DataTable = () => {
    const [{ pageIndex, pageSize }, setPagination] =
        React.useState<PaginationState>({
            pageIndex: 0,
            pageSize: 10,
        });

    const getCoaches = useGetPageCoaches({
        paginationState: {
            pageIndex,
            pageSize,
        },
    });

    return (
        <div>
            <Table
                loading={getCoaches.isLoading || getCoaches.isRefetching}
                columns={columns}
                data={getCoaches.data?.data || []}
                pagination={{
                    totalSize: getCoaches.data?.meta?.total || 0,
                    pageCount: getCoaches.data?.meta?.last_page as number,
                    manualPagination: true,
                    state: { pageIndex, pageSize },
                    setPagination: setPagination,
                }}
            />
        </div>
    );
};
