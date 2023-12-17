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


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    pagination?: {
        pageCount: number,
        manualPagination: boolean,
        setPagination: OnChangeFn<PaginationState>,
        state: PaginationState
    }
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                             pagination
                                         }: DataTableProps<TData, TValue>) {


    let tableOption: TableOptions<any> = {
        data: addIndexToData(data),
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

    // let tableState: TableState

    // if (pagination) {
    //     // tableState = {
    //     //     pagination: {
    //     //         pageIndex: pagination.state.pageSize,
    //     //
    //     //     }
    //     // }
    //     tableOption = {
    //         ...tableOption,
    //         // getPaginationRowModel: getPaginationRowModel(),
    //         onPaginationChange: pagination.setPagination,
    //         manualPagination: pagination.manualPagination,
    //         pageCount: pagination.pageCount,
    //         state: tableState
    //     }
    // }

    const table = useReactTable(tableOption)

    return (
        <div>
            <div className="tw-rounded-md tw-border tw-border-gray-700">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
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
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="tw-h-24 tw-text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {pagination && <DataTablePagination table={table}/>}
        </div>
    )
}