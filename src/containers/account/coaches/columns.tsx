"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { coachApiUrl } from "@/constants/coach";
import Badge from "@components/ui/badge";
import { DataTableRowActions } from "./data-table-row-action";

const RowSchema = coachApiUrl.getPage.item;

export type TypeRowData = z.infer<typeof RowSchema>;

export const columns: ColumnDef<TypeRowData>[] = [
    {
        accessorKey: "Row",
        header: "Row",
        maxSize: 10,
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "phone_number",
        header: "Phone Number",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            switch (row.original.status) {
                case 0:
                    return <Badge>Not Checked</Badge>;
                case 1:
                    return <Badge>Pending</Badge>;
                case 2:
                    return <Badge>Accepted</Badge>;
                case 3:
                    return <Badge>Regected</Badge>;
                case 4:
                    return <Badge>Active</Badge>;
                default:
                    return <Badge>{row.original.status}</Badge>;
            }
        },
    },
    {
        accessorKey: "view",
        header: "View",
        cell: ({ row }) => <DataTableRowActions row={row} />,
        meta: {
            align: "right",
        },
    },
];
