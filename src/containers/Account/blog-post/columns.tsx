"use client"

import {ColumnDef} from "@tanstack/react-table"
import {blogApiUrl} from "../../../constants/blogApiUrl";
import {DataTableRowActions} from "@containers/Account/blog-post/data-table-row-action";


export const columns: ColumnDef<typeof blogApiUrl.post.admin.getPage.type>[] = [
    {
        accessorKey: "Row",
        header: "Row",
        maxSize: 10,
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "path",
        header: "Path",
    },
    {
        accessorKey: "view",
        header: "View",
        cell: ({row}) => <DataTableRowActions<typeof blogApiUrl.post.admin.getPage.type> row={row}/>,
        meta: {
            align: 'right'
        }
    },
]