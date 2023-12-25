import {Table} from "@tanstack/react-table"
import {usePagination} from "@hooks";
import cn from "clsx";
import {ChevronLeftIcon, ChevronRightIcon} from "@radix-ui/react-icons";


interface DataTablePaginationProps<TData> {
    table: Table<TData>,
    totalSize: number,
}

const itemClassname = "tw-w-[32px] tw-h-[40px] tw-flex tw-justify-center tw-items-center tw-py-2.5 tw-rounded tw-text-md  tw-relative  tw-bg-transparent tw-transition-all tw-duration-300 hover:tw-bg-neutral-100 dark:tw-text-white dark:htw-over:bg-neutral-700 dark:tw-hover:text-white"

export function DataTablePagination<TData>({
                                               table,
                                               totalSize,
                                           }: DataTablePaginationProps<TData>) {

    const {pageSize, pageIndex} = table.getState().pagination

    const paginationRange = usePagination({
        currentPage: pageIndex,
        totalCount: totalSize,
        pageSize: pageSize,
        siblingCount: 1
    })
    
    return (
        <div className="tw-py-2">
            <ul className="tw-list-style-none tw-flex tw-items-center tw-space-x-2">
                {paginationRange.length > 2 && <li
                    className={cn(
                        itemClassname,
                        table.getCanNextPage() && "tw-opacity-55 tw-cursor-not-allowed",
                        "tw-text-neutral-600 tw-border-gray-200 tw-border tw-bg-gray-100 tw-rounded-lg tw-cursor-pointer"
                    )}
                    onClick={() => table.setPageIndex(pageIndex - 1)}
                >
                    <ChevronLeftIcon/>
                </li>}
                {paginationRange.map((pageNumber, index) => {

                    if (pageNumber === "....") {
                        return <li key={index} className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                            key={index}
                            className={cn(
                                itemClassname,
                                pageNumber === (pageIndex + 1) ?
                                    "tw-bg-primary tw-text-white hover:tw-text-gray-300 hover:tw-bg-primary tw-border-primary tw-border tw-cursor-default" :
                                    "tw-text-neutral-600 tw-border-gray-300 tw-border tw-bg-gray-100 tw-rounded-lg tw-cursor-pointer",
                            )}
                            onClick={() => {
                                if (pageNumber !== (pageIndex + 1))
                                    table.setPageIndex(+pageNumber)
                            }}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                {paginationRange.length > 2 && <li
                    className={cn(
                        itemClassname,
                        table.getCanPreviousPage() && "tw-opacity-55 tw-cursor-not-allowed",
                        "tw-text-neutral-600 tw-border-gray-200 tw-border tw-bg-gray-100 tw-rounded-lg tw-cursor-pointer"
                    )}
                    onClick={() => table.setPageIndex(pageIndex + 1)}
                >
                    <ChevronRightIcon/>
                </li>}
            </ul>
        </div>
    )
}
