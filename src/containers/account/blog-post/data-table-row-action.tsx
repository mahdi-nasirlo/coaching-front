"use client"

import {DotsHorizontalIcon} from "@radix-ui/react-icons"
import {Row} from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@ui/v2/dropdown-menu";
import {Button} from "@ui/v2/button";
import {useDeleteBlogPost} from "../../../hooks/api/posts";
import Anchor from "@ui/anchor";
import {blogApiUrl} from "../../../constants/blogApiUrl";
import {TypeRowData} from "@containers/account/blog-post/columns";


interface DataTableRowActionsProps {
    row: Row<TypeRowData>
}

export function DataTableRowActions({
                                               row,
                                    }: DataTableRowActionsProps) {

    const {mutateAsync} = useDeleteBlogPost()

    const handleDelete = async () => {
        await mutateAsync({uid: row.original?.path})
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="focus-visible:tw-border-0 focus-visible:tw-outline-0 tw-px-0"
                        // className="tw-flex tw-h-8 tw-w-8 tw-p-0"
                    >
                        <DotsHorizontalIcon className="h-4 w-4"/>
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuItem>
                        <Anchor path={blogApiUrl.post.admin.update.page + row.original.path}>
                            Edit
                        </Anchor>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Make a copy</DropdownMenuItem>
                    <DropdownMenuItem>Favorite</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup>
                                {/*{labels.map((label) => (*/}
                                {/*    <DropdownMenuRadioItem key={label.value} value={label.value}>*/}
                                {/*        {label.label}*/}
                                {/*    </DropdownMenuRadioItem>*/}
                                {/*))}*/}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={handleDelete}>
                        Delete
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}