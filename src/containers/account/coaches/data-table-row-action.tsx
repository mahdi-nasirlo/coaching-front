"use client";

import { Row } from "@tanstack/react-table";
import { TypeRowData } from "./columns";
import Link from "next/link";
import { InfoIcon } from "lucide-react";

interface DataTableRowActionsProps {
    row: Row<TypeRowData>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
    return (
        <Link
            className="tw-text-secondary tw-flex tw-items-center tw-justify-end"
            href={`/account/coaches/${row.original.id}`}
        >
            View information
            <InfoIcon className="tw-ml-1 tw-h-5" />
        </Link>
    );
}
