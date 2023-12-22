import * as React from "react"

import {cn} from "@/lib/utils"
import Spinner from "@ui/spinner";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement> & { loading?: boolean }
>(({loading, className, ...props}, ref) => (
    <div
        className="tw-bg-white tw-relative tw-w-full tw-overflow-auto tw-rounded-lg tw-border-gray-500 tw-border tw-shadow-sm">
        {loading && <>
            <div
                className="tw-flex tw-items-center tw-absolute tw-inset-0 tw-z-10 tw-justify-center">
                <Spinner/>
            </div>
            <div className="tw-absolute tw-inset-0 tw-bg-white tw-opacity-75"></div>
        </>}
        <table
            ref={ref}
            className={cn("tw-w-full tw-border-gray-600 tw-caption-bottom tw-text-sm", className)}
            {...props}
        />
    </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <thead ref={ref}
           className={cn("[&_tr]:tw-border-b-gray-600 tw-text-white tw-rounded-lg", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <tbody
        ref={ref}
        className={cn("[&_tr:last-child]:tw-border-0", className)}
        {...props}
    />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "tw-border-t tw-bg-muted/50 tw-font-medium [&>tr]:last:tw-border-b-0",
            className
        )}
        {...props}
    />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({className, ...props}, ref) => (
    <tr
        ref={ref}
        className={cn(
            "tw-border-b tw-border-gray-500 tw-transition-colors hover:tw-bg-muted/50 data-[state=selected]:tw-bg-muted",
            className
        )}
        {...props}
    />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
    <th
        ref={ref}
        className={cn(
            className,
            "tw-h-12 tw-px-4 tw-text-left tw-align-middle tw-font-medium tw-text-muted-foreground [&:has([role=checkbox])]:tw-pr-0",
        )}
        {...props}
    />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref) => (
    <td
        ref={ref}
        className={cn("tw-p-4 tw-align-middle [&:has([role=checkbox])]:tw-pr-0", className)}
        {...props}
    />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({className, ...props}, ref) => (
    <caption
        ref={ref}
        className={cn("tw-mt-4 tw-text-sm tw-text-muted-foreground", className)}
        {...props}
    />
))
TableCaption.displayName = "TableCaption"

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
