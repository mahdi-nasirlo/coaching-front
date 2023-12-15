"use client"

import {ColumnDef} from "@tanstack/react-table"
import {blogApiUrl} from "../../../constants/blogApiUrl";


export const columns: ColumnDef<typeof blogApiUrl.post.admin.getPage.type>[] = [
    {
        accessorKey: "Row",
        header: "Row",
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
    },
]