"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    OnChangeFn,
    PaginationState,
    TableOptions,
    useReactTable
} from "@tanstack/react-table"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@ui/v2/table";
import {addIndexToData} from "@utils/methods";
import {DataTablePagination} from "@ui/v2/pagniation-controller";
import Empty from "./empty";
import cn from "clsx";

const alignClassname: { [key in "center" | "right" | "left"]: string } = {
    center: "tw-text-center",
    right: "tw-text-right",
    left: "tw-text-left",
};


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    loading?: boolean,
    pagination?: {
        totalSize: number,
        pageCount: number,
        manualPagination: boolean,
        setPagination: OnChangeFn<PaginationState>,
        state: PaginationState
    }
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                             pagination,
                                             loading,
                                         }: DataTableProps<TData, TValue>) {


    let tableOption: TableOptions<any> = {
        data: addIndexToData({
            data: data,
            startFrom: pagination ? pagination?.state.pageIndex * pagination?.state.pageSize : 1
        }),
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: pagination !== undefined,
        onPaginationChange: pagination?.setPagination,
        state: {
            pagination: {
                pageIndex: pagination?.state.pageIndex || 0,
                pageSize: pagination?.state.pageSize || 5
            },
        },
        pageCount: pagination?.pageCount || 1
    }


    const table = useReactTable(tableOption)

    return (
        <div>
            <div className="">
                <Table loading={loading}>
                    <TableHeader className="tw-bg-primary">
                        {table.getHeaderGroups().map((headerGroup) => {
                            return (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                key={header.id}
                                                className={cn(
                                                    "tw-h-14 tw-text-white",
                                                    // @ts-ignore
                                                    alignClassname[(header.column.columnDef.meta as any)?.align || 'left']
                                                )}
                                                style={{width: header.getSize() + "px", color: "white"}}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell align={(cell.column.columnDef.meta as any)?.align} key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="tw-h-24 tw-text-center">
                                    <Empty className="tw-mx-auto tw-w-28 tw-h-28"/>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="tw-flex tw-justify-end tw-items-center">
                {pagination && <DataTablePagination totalSize={pagination.totalSize}
                                                    table={table}/>}
            </div>
        </div>
    )
}