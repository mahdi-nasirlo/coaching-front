"use client"

import {ColumnDef} from "@tanstack/react-table"
import {blogApiUrl} from "../../../constants/blogApiUrl";
import {DataTableRowActions} from "@containers/account/blog-post/data-table-row-action";
import {z} from "zod";


const RowSchema = blogApiUrl.post.admin.getPage.type

export type TypeRowData = z.infer<typeof RowSchema>


export const columns: ColumnDef<TypeRowData>[] = [
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
        cell: ({row}) => <DataTableRowActions row={row}/>,
        meta: {
            align: 'right'
        }
    },
]